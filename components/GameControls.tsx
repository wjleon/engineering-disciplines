"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatTime } from "@/utils/gameLogic"
import { Play, Pause, Square, RotateCcw, Trophy } from "lucide-react"

interface GameControlsProps {
  numPegs: number
  numDisks: number
  moves: number
  elapsedTime: number
  isWon: boolean
  isAutoSolving: boolean
  autoSolvePaused: boolean
  onPegsChange: (pegs: number) => void
  onDisksChange: (disks: number) => void
  onReset: () => void
  onAutoSolve: () => void
  onPauseAutoSolve: () => void
  onStopAutoSolve: () => void
}

export default function GameControls({
  numPegs,
  numDisks,
  moves,
  elapsedTime,
  isWon,
  isAutoSolving,
  autoSolvePaused,
  onPegsChange,
  onDisksChange,
  onReset,
  onAutoSolve,
  onPauseAutoSolve,
  onStopAutoSolve,
}: GameControlsProps) {
  return (
    <div className="space-y-4">
      {/* Game Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isWon && <Trophy className="w-5 h-5 text-yellow-500" />}
            Game Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{moves}</div>
              <div className="text-sm text-gray-600">Moves</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{formatTime(elapsedTime)}</div>
              <div className="text-sm text-gray-600">Time</div>
            </div>
          </div>
          {isWon && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg text-center">
              <div className="text-yellow-800 font-semibold">🎉 Congratulations!</div>
              <div className="text-yellow-700 text-sm">
                You solved it in {moves} moves and {formatTime(elapsedTime)}!
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Game Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Pegs</label>
              <Select
                value={numPegs.toString()}
                onValueChange={(value) => onPegsChange(Number.parseInt(value))}
                disabled={isAutoSolving}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 6 }, (_, i) => i + 3).map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Pegs
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Disks</label>
              <Select
                value={numDisks.toString()}
                onValueChange={(value) => onDisksChange(Number.parseInt(value))}
                disabled={isAutoSolving}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Disk{num !== 1 ? "s" : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {numDisks > 20 && (
            <div className="p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
              <div className="text-yellow-800 text-sm">
                <strong>⚠️ High Disk Count:</strong> With {numDisks} disks, the auto-solve will take a very long time
                (minimum {Math.pow(2, numDisks) - 1} moves). Consider using fewer disks for better performance.
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Game Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button onClick={onReset} variant="outline" className="w-full" disabled={isAutoSolving && !autoSolvePaused}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Game
          </Button>

          {!isAutoSolving ? (
            <Button onClick={onAutoSolve} className="w-full" disabled={isWon}>
              <Play className="w-4 h-4 mr-2" />
              Auto Solve
            </Button>
          ) : (
            <div className="space-y-2">
              <Button onClick={onPauseAutoSolve} variant="outline" className="w-full">
                {autoSolvePaused ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </>
                )}
              </Button>

              <Button onClick={onStopAutoSolve} variant="destructive" className="w-full">
                <Square className="w-4 h-4 mr-2" />
                Stop Auto Solve
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
