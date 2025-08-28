import type { Disk, Peg } from "@/types/game.types"

export const DISK_COLORS = [
  "#ef4444", // red
  "#f97316", // orange
  "#eab308", // yellow
  "#22c55e", // green
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#06b6d4", // cyan
  "#84cc16", // lime
  "#f59e0b", // amber
  "#ef4444", // red-500
  "#dc2626", // red-600
  "#b91c1c", // red-700
  "#991b1b", // red-800
  "#f97316", // orange-500
  "#ea580c", // orange-600
  "#c2410c", // orange-700
  "#9a3412", // orange-800
  "#eab308", // yellow-500
  "#ca8a04", // yellow-600
  "#a16207", // yellow-700
  "#854d0e", // yellow-800
  "#22c55e", // green-500
  "#16a34a", // green-600
  "#15803d", // green-700
  "#166534", // green-800
  "#3b82f6", // blue-500
  "#2563eb", // blue-600
  "#1d4ed8", // blue-700
  "#1e40af", // blue-800
  "#8b5cf6", // violet-500
  "#7c3aed", // violet-600
  "#6d28d9", // violet-700
  "#5b21b6", // violet-800
  "#ec4899", // pink-500
  "#db2777", // pink-600
  "#be185d", // pink-700
  "#9d174d", // pink-800
  "#06b6d4", // cyan-500
  "#0891b2", // cyan-600
  "#0e7490", // cyan-700
  "#155e75", // cyan-800
  "#84cc16", // lime-500
  "#65a30d", // lime-600
  "#4d7c0f", // lime-700
  "#365314", // lime-800
  "#f59e0b", // amber-500
  "#d97706", // amber-600
  "#b45309", // amber-700
  "#92400e", // amber-800
]

export function createInitialDisks(numDisks: number): Disk[] {
  return Array.from({ length: numDisks }, (_, i) => ({
    id: i + 1,
    size: numDisks - i,
    color: DISK_COLORS[i % DISK_COLORS.length],
  }))
}

export function createInitialPegs(numPegs: number, numDisks: number): Peg[] {
  const pegs: Peg[] = Array.from({ length: numPegs }, (_, i) => ({
    id: i,
    disks: [],
  }))

  // Place all disks on the first peg
  pegs[0].disks = createInitialDisks(numDisks)

  return pegs
}

export function canMoveDisk(from: Peg, to: Peg): boolean {
  if (from.disks.length === 0) return false
  if (to.disks.length === 0) return true

  const fromDisk = from.disks[from.disks.length - 1]
  const toDisk = to.disks[to.disks.length - 1]

  return fromDisk.size < toDisk.size
}

export function moveDisk(pegs: Peg[], fromIndex: number, toIndex: number): Peg[] {
  const newPegs = pegs.map((peg) => ({
    ...peg,
    disks: [...peg.disks],
  }))

  const fromPeg = newPegs[fromIndex]
  const toPeg = newPegs[toIndex]

  if (!canMoveDisk(fromPeg, toPeg)) {
    return pegs // Invalid move
  }

  const disk = fromPeg.disks.pop()!
  toPeg.disks.push(disk)

  return newPegs
}

export function checkWinCondition(pegs: Peg[], numDisks: number): boolean {
  // Win condition: all disks are on the last peg
  const lastPeg = pegs[pegs.length - 1]
  return lastPeg.disks.length === numDisks
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}
