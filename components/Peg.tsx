"use client"

import type React from "react"

import type { Peg as PegType } from "@/types/game.types"
import Disk from "./Disk"

interface PegProps {
  peg: PegType
  onDiskDragStart: (pegId: number, diskIndex: number) => void
  onDiskDragEnd: () => void
  onDrop: (pegId: number) => void
  onDragOver: (e: React.DragEvent) => void
  isDragOver: boolean
  draggingDisk: { pegId: number; diskIndex: number } | null
}

export default function Peg({
  peg,
  onDiskDragStart,
  onDiskDragEnd,
  onDrop,
  onDragOver,
  isDragOver,
  draggingDisk,
}: PegProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    onDrop(peg.id)
  }

  // Calculate peg height based on number of disks (minimum 200px, maximum 600px)
  const pegHeight = Math.min(600, Math.max(200, peg.disks.length * 5 + 100))

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-sm font-medium text-gray-600">Peg {peg.id + 1}</div>

      <div
        className={`
          relative w-48 bg-gradient-to-b from-amber-100 to-amber-200 
          rounded-lg border-2 border-amber-300 flex flex-col-reverse items-center
          transition-all duration-200 overflow-hidden
          ${isDragOver ? "bg-gradient-to-b from-green-100 to-green-200 border-green-300" : ""}
        `}
        style={{ height: `${pegHeight}px` }}
        onDrop={handleDrop}
        onDragOver={onDragOver}
      >
        {/* Peg rod */}
        <div className="absolute bottom-2 w-2 bg-amber-600 rounded-full" style={{ height: "calc(100% - 16px)" }} />

        {/* Disks container with scroll */}
        <div
          className="flex flex-col-reverse items-center pb-2 z-10 w-full overflow-y-auto max-h-full"
          style={{ gap: "2px" }}
        >
          {peg.disks.map((disk, index) => (
            <Disk
              key={disk.id}
              disk={disk}
              isDragging={draggingDisk?.pegId === peg.id && draggingDisk?.diskIndex === peg.disks.length - 1 - index}
              onDragStart={() => {
                if (index === peg.disks.length - 1) {
                  onDiskDragStart(peg.id, index)
                }
              }}
              onDragEnd={onDiskDragEnd}
            />
          ))}
        </div>

        {/* Drop zone indicator */}
        {isDragOver && (
          <div className="absolute inset-0 bg-green-200 bg-opacity-50 rounded-lg border-2 border-dashed border-green-400" />
        )}
      </div>
    </div>
  )
}
