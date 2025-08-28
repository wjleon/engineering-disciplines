"use client"

import { useReducer, useEffect, useCallback } from "react"
import type { GameState, GameAction } from "@/types/game.types"
import { createInitialPegs, moveDisk, checkWinCondition } from "@/utils/gameLogic"

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "MOVE_DISK":
      const newPegs = moveDisk(state.pegs, action.from, action.to)
      if (newPegs === state.pegs) return state // Invalid move

      const newMoves = state.moves + 1
      const isWon = checkWinCondition(newPegs, state.numDisks)

      return {
        ...state,
        pegs: newPegs,
        moves: newMoves,
        isWon,
      }

    case "RESET_GAME":
      return {
        ...state,
        pegs: createInitialPegs(action.numPegs, action.numDisks),
        numPegs: action.numPegs,
        numDisks: action.numDisks,
        moves: 0,
        startTime: null,
        elapsedTime: 0,
        isWon: false,
        isAutoSolving: false,
        autoSolvePaused: false,
      }

    case "START_TIMER":
      return {
        ...state,
        startTime: Date.now(),
      }

    case "UPDATE_TIMER":
      return {
        ...state,
        elapsedTime: action.elapsedTime,
      }

    case "START_AUTO_SOLVE":
      return {
        ...state,
        isAutoSolving: true,
        autoSolvePaused: false,
        startTime: state.startTime || Date.now(),
      }

    case "PAUSE_AUTO_SOLVE":
      return {
        ...state,
        autoSolvePaused: !state.autoSolvePaused,
      }

    case "STOP_AUTO_SOLVE":
      return {
        ...state,
        isAutoSolving: false,
        autoSolvePaused: false,
      }

    case "AUTO_MOVE":
      const autoNewPegs = moveDisk(state.pegs, action.from, action.to)
      const autoNewMoves = state.moves + 1
      const autoIsWon = checkWinCondition(autoNewPegs, state.numDisks)

      return {
        ...state,
        pegs: autoNewPegs,
        moves: autoNewMoves,
        isWon: autoIsWon,
        isAutoSolving: !autoIsWon,
      }

    default:
      return state
  }
}

export function useGameState(initialPegs = 3, initialDisks = 5) {
  const [state, dispatch] = useReducer(gameReducer, {
    pegs: createInitialPegs(initialPegs, initialDisks),
    numPegs: initialPegs,
    numDisks: initialDisks,
    moves: 0,
    startTime: null,
    elapsedTime: 0,
    isWon: false,
    isAutoSolving: false,
    autoSolvePaused: false,
  })

  // Timer effect
  useEffect(() => {
    if (!state.startTime || state.isWon) return

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.startTime!) / 1000)
      dispatch({ type: "UPDATE_TIMER", elapsedTime: elapsed })
    }, 1000)

    return () => clearInterval(interval)
  }, [state.startTime, state.isWon])

  const moveDiskAction = useCallback(
    (from: number, to: number) => {
      if (!state.startTime) {
        dispatch({ type: "START_TIMER" })
      }
      dispatch({ type: "MOVE_DISK", from, to })
    },
    [state.startTime],
  )

  const resetGame = useCallback((numPegs: number, numDisks: number) => {
    dispatch({ type: "RESET_GAME", numPegs, numDisks })
  }, [])

  const startAutoSolve = useCallback(() => {
    dispatch({ type: "START_AUTO_SOLVE" })
  }, [])

  const pauseAutoSolve = useCallback(() => {
    dispatch({ type: "PAUSE_AUTO_SOLVE" })
  }, [])

  const stopAutoSolve = useCallback(() => {
    dispatch({ type: "STOP_AUTO_SOLVE" })
  }, [])

  const autoMove = useCallback((from: number, to: number) => {
    dispatch({ type: "AUTO_MOVE", from, to })
  }, [])

  return {
    state,
    moveDiskAction,
    resetGame,
    startAutoSolve,
    pauseAutoSolve,
    stopAutoSolve,
    autoMove,
  }
}
