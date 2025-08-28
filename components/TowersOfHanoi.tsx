"use client"

import type React from "react"

import { useState } from "react"
import { useGameState } from "@/hooks/useGameState"
import { useAutoSolver } from "@/hooks/useAutoSolver"
import Peg from "./Peg"
import GameControls from "./GameControls"

export default function TowersOfHanoi() {
  const { state, moveDiskAction, resetGame, startAutoSolve, pauseAutoSolve, stopAutoSolve, autoMove } = useGameState()

  const [draggingDisk, setDraggingDisk] = useState<{
    pegId: number
    diskIndex: number
  } | null>(null)
  const [dragOverPeg, setDragOverPeg] = useState<number | null>(null)

  useAutoSolver(state, autoMove, stopAutoSolve)

  const handleDiskDragStart = (pegId: number, diskIndex: number) => {
    if (state.isAutoSolving) return
    setDraggingDisk({ pegId, diskIndex })
  }

  const handleDiskDragEnd = () => {
    setDraggingDisk(null)
    setDragOverPeg(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handlePegDragOver = (pegId: number) => (e: React.DragEvent) => {
    e.preventDefault()
    setDragOverPeg(pegId)
  }

  const handleDrop = (toPegId: number) => {
    if (!draggingDisk) return

    const fromPegId = draggingDisk.pegId
    if (fromPegId !== toPegId) {
      moveDiskAction(fromPegId, toPegId)
    }

    setDraggingDisk(null)
    setDragOverPeg(null)
  }

  const handleConfigChange = (numPegs: number, numDisks: number) => {
    resetGame(numPegs, numDisks)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Towers of Hanoi</h1>
          <p className="text-gray-600">
            Move all disks to the rightmost peg. Only one disk can be moved at a time, and a disk can only be placed on
            top of a larger disk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Game Board */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-center items-end space-x-2 overflow-x-auto pb-4 min-h-[300px]">
                {state.pegs.map((peg) => (
                  <Peg
                    key={peg.id}
                    peg={peg}
                    onDiskDragStart={handleDiskDragStart}
                    onDiskDragEnd={handleDiskDragEnd}
                    onDrop={handleDrop}
                    onDragOver={handlePegDragOver(peg.id)}
                    isDragOver={dragOverPeg === peg.id}
                    draggingDisk={draggingDisk}
                  />
                ))}
              </div>

              {state.isAutoSolving && (
                <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg text-center">
                  <div className="text-blue-800 font-semibold">
                    {state.autoSolvePaused ? "⏸️ Auto-solve paused" : "🤖 Auto-solving..."}
                  </div>
                  <div className="text-blue-700 text-sm">
                    Watch as the algorithm solves the puzzle step by step
                    {state.numDisks > 10 && " (using faster animation for high disk count)"}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="lg:col-span-1">
            <GameControls
              numPegs={state.numPegs}
              numDisks={state.numDisks}
              moves={state.moves}
              elapsedTime={state.elapsedTime}
              isWon={state.isWon}
              isAutoSolving={state.isAutoSolving}
              autoSolvePaused={state.autoSolvePaused}
              onPegsChange={(pegs) => handleConfigChange(pegs, state.numDisks)}
              onDisksChange={(disks) => handleConfigChange(state.numPegs, disks)}
              onReset={() => resetGame(state.numPegs, state.numDisks)}
              onAutoSolve={startAutoSolve}
              onPauseAutoSolve={pauseAutoSolve}
              onStopAutoSolve={stopAutoSolve}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
