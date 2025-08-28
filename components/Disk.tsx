"use client"

import type React from "react"

import type { Disk as DiskType } from "@/types/game.types"

interface DiskProps {
  disk: DiskType
  isDragging?: boolean
  onDragStart?: (e: React.DragEvent) => void
  onDragEnd?: (e: React.DragEvent) => void
}

export default function Disk({ disk, isDragging, onDragStart, onDragEnd }: DiskProps) {
  // Improved sizing calculation for up to 50 disks
  const baseWidth = 40
  const maxWidth = 200
  const width = Math.min(maxWidth, baseWidth + disk.size * 3)

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={`
        h-4 rounded-lg border border-gray-800 cursor-grab active:cursor-grabbing
        transition-all duration-200 hover:brightness-110
        ${isDragging ? "opacity-50 scale-105" : ""}
      `}
      style={{
        backgroundColor: disk.color,
        width: `${width}px`,
        minWidth: "40px",
      }}
      title={`Disk ${disk.id} (Size: ${disk.size})`}
    >
      <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">{disk.size}</div>
    </div>
  )
}
