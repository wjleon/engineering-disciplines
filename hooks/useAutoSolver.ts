"use client"

import { useEffect, useRef, useCallback } from "react"
import { solveTowersOfHanoi } from "@/utils/solverAlgorithm"
import type { GameState } from "@/types/game.types"

export function useAutoSolver(
  gameState: GameState,
  autoMove: (from: number, to: number) => void,
  stopAutoSolve: () => void,
) {
  const solutionRef = useRef<{ from: number; to: number }[]>([])
  const currentMoveRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const executeMoves = useCallback(() => {
    if (gameState.autoSolvePaused || !gameState.isAutoSolving) return

    if (currentMoveRef.current >= solutionRef.current.length) {
      stopAutoSolve()
      return
    }

    const move = solutionRef.current[currentMoveRef.current]
    autoMove(move.from, move.to)
    currentMoveRef.current++

    // Faster animation for high disk counts
    const delay = gameState.numDisks > 10 ? 200 : gameState.numDisks > 20 ? 100 : 800
    timeoutRef.current = setTimeout(executeMoves, delay)
  }, [gameState.autoSolvePaused, gameState.isAutoSolving, gameState.numDisks, autoMove, stopAutoSolve])

  useEffect(() => {
    if (gameState.isAutoSolving && !gameState.autoSolvePaused) {
      if (currentMoveRef.current === 0) {
        // Generate solution
        const solution = solveTowersOfHanoi(gameState.numDisks, gameState.numPegs, 0, gameState.numPegs - 1)
        solutionRef.current = solution.map((move) => ({
          from: move.from,
          to: move.to,
        }))
      }

      timeoutRef.current = setTimeout(executeMoves, 800)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [gameState.isAutoSolving, gameState.autoSolvePaused, executeMoves])

  useEffect(() => {
    if (!gameState.isAutoSolving) {
      currentMoveRef.current = 0
      solutionRef.current = []
    }
  }, [gameState.isAutoSolving])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
}
