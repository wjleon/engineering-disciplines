export interface Disk {
  id: number
  size: number
  color: string
}

export interface Peg {
  id: number
  disks: Disk[]
}

export interface GameState {
  pegs: Peg[]
  numPegs: number
  numDisks: number
  moves: number
  startTime: number | null
  elapsedTime: number
  isWon: boolean
  isAutoSolving: boolean
  autoSolvePaused: boolean
}

export interface Move {
  from: number
  to: number
  disk: Disk
}

export type GameAction =
  | { type: "MOVE_DISK"; from: number; to: number }
  | { type: "RESET_GAME"; numPegs: number; numDisks: number }
  | { type: "START_TIMER" }
  | { type: "UPDATE_TIMER"; elapsedTime: number }
  | { type: "START_AUTO_SOLVE" }
  | { type: "PAUSE_AUTO_SOLVE" }
  | { type: "STOP_AUTO_SOLVE" }
  | { type: "AUTO_MOVE"; from: number; to: number }
