'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{
    x?: number
    y?: number
  }>({ x: undefined, y: undefined })

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event
      setMousePosition({ x: clientX, y: clientY })
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return mousePosition
}

interface Props {
  currentSection: string
}

export default function CursorTrail({ currentSection }: Props) {
  const { x, y } = useMousePosition()

  return (
    <div className='pointer-events-none fixed inset-0 z-[100]'>
      <motion.div
        className={`absolute h-4 w-4 rounded-full ${currentSection === 'experience' ? 'bg-white' : 'bg-black'}`}
        initial={{ opacity: 0.8 }}
        animate={{
          x: x,
          y: y,
          opacity: 1,
        }}
        transition={{ duration: 0 }}
        style={{ left: -4, top: -4 }}
      />
    </div>
  )
}
