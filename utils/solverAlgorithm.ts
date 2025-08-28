import type { Move } from "@/types/game.types"

export function solveTowersOfHanoi(numDisks: number, numPegs: number, source = 0, destination = -1): Move[] {
  if (destination === -1) {
    destination = numPegs - 1
  }

  if (numPegs === 3) {
    return solveClassicHanoi(numDisks, source, destination, 3 - source - destination)
  } else {
    return solveFrameStewart(numDisks, numPegs, source, destination)
  }
}

function solveClassicHanoi(numDisks: number, source: number, destination: number, auxiliary: number): Move[] {
  if (numDisks === 1) {
    return [{ from: source, to: destination, disk: { id: 1, size: 1, color: "" } }]
  }

  const moves: Move[] = []

  // Move n-1 disks from source to auxiliary
  moves.push(...solveClassicHanoi(numDisks - 1, source, auxiliary, destination))

  // Move the largest disk from source to destination
  moves.push({ from: source, to: destination, disk: { id: numDisks, size: numDisks, color: "" } })

  // Move n-1 disks from auxiliary to destination
  moves.push(...solveClassicHanoi(numDisks - 1, auxiliary, destination, source))

  return moves
}

function solveFrameStewart(numDisks: number, numPegs: number, source: number, destination: number): Move[] {
  if (numDisks === 1) {
    return [{ from: source, to: destination, disk: { id: 1, size: 1, color: "" } }]
  }

  if (numPegs === 3) {
    const auxiliary = [0, 1, 2].find((peg) => peg !== source && peg !== destination)!
    return solveClassicHanoi(numDisks, source, destination, auxiliary)
  }

  const moves: Move[] = []

  // Find optimal split point
  let bestMoves = Number.POSITIVE_INFINITY
  let bestSplit = 1

  for (let i = 1; i < numDisks; i++) {
    const movesForSplit = 2 * T(i, numPegs) + T(numDisks - i, numPegs - 1)
    if (movesForSplit < bestMoves) {
      bestMoves = movesForSplit
      bestSplit = i
    }
  }

  // Find an intermediate peg
  const intermediate = Array.from({ length: numPegs }, (_, i) => i).find(
    (peg) => peg !== source && peg !== destination,
  )!

  // Move top bestSplit disks to intermediate peg
  moves.push(...solveFrameStewart(bestSplit, numPegs, source, intermediate))

  // Move remaining disks to destination
  moves.push(...solveFrameStewart(numDisks - bestSplit, numPegs - 1, source, destination))

  // Move the bestSplit disks from intermediate to destination
  moves.push(...solveFrameStewart(bestSplit, numPegs, intermediate, destination))

  return moves
}

// T(n, k) function for Frame-Stewart algorithm
function T(n: number, k: number): number {
  if (n === 0) return 0
  if (k === 3) return Math.pow(2, n) - 1

  let min = Number.POSITIVE_INFINITY
  for (let i = 1; i < n; i++) {
    const moves = 2 * T(i, k) + T(n - i, k - 1)
    min = Math.min(min, moves)
  }

  return min
}
