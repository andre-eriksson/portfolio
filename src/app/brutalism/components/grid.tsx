'use client'

import { useEffect, useState } from 'react'

interface Props {
  cellSize?: number
  opacity?: number
  className?: string
}

export default function Grid({
  cellSize = 80,
  opacity = 0.2,
  className = '',
}: Props) {
  const [gridDimensions, setGridDimensions] = useState({ cols: 0, rows: 0 })

  useEffect(() => {
    const calculateGrid = () => {
      const cols = Math.ceil(window.innerWidth / cellSize) + 1 // +1 for partial cells
      const rows = Math.ceil(window.innerHeight / cellSize) + 1
      setGridDimensions({ cols, rows })
    }

    calculateGrid()
    window.addEventListener('resize', calculateGrid)
    return () => window.removeEventListener('resize', calculateGrid)
  }, [cellSize])

  const totalCells = gridDimensions.cols * gridDimensions.rows

  const gridStyle = {
    gridTemplateColumns: `repeat(${gridDimensions.cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${gridDimensions.rows}, ${cellSize}px)`,
    opacity,
  }

  return (
    <div
      className={`fixed inset-0 grid pointer-events-none ${className}`}
      style={gridStyle}
    >
      {Array.from({ length: totalCells }, (_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
        <div key={index} className='border border-neutral-500 bg-transparent' />
      ))}
    </div>
  )
}
