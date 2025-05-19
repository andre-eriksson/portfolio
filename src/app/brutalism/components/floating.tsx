'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Props {
  currentSection: string
}

export default function FloatingElements({ currentSection }: Props) {
  const [sectionNumber, setSectionNumber] = useState('about')
  const sectionColors: Record<string, { primary: string; secondary: string }> =
    {
      about: { primary: '#000000', secondary: '#FFFFFF' },
      'job-one': { primary: '#EEC912', secondary: '#000000' },
      experience: { primary: '#FFFFFF', secondary: '#121212' },
    }

  const colors = sectionColors[currentSection] || sectionColors.about

  useEffect(() => {
    switch (currentSection) {
      case 'about':
        setSectionNumber('00')
        break
      case 'project-one':
        setSectionNumber('01')
        break
      case 'experience':
        setSectionNumber('02')
        break
      default:
        setSectionNumber('00')
    }
  }, [currentSection])

  return (
    <>
      <motion.div
        className='fixed right-8 bottom-8 z-40 font-mono text-6xl font-black opacity-30 pointer-events-none scale-y-125'
        animate={{
          color: colors.primary,
        }}
        transition={{ duration: 0.5 }}
      >
        {sectionNumber}
      </motion.div>

      <div className='hidden xl:block pointer-events-none fixed inset-0 z-40 overflow-hidden'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            background: colors.primary,
            rotateZ: currentSection === 'project-one' ? 75 : 0,
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='absolute top-[10%] left-[10%] h-24 w-24 rotate-45'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, borderColor: colors.primary }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='absolute top-[30%] right-[20%] h-32 w-32 border-8 rounded-full'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            background: colors.primary,
            rotateZ: currentSection === 'project-one' ? 90 : 0,
            left: currentSection === 'project-one' ? '33%' : '5%',
            bottom: currentSection === 'project-one' ? '25%' : '25%',
          }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className='absolute bottom-[25%] h-20 w-5'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, background: colors.primary }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className='absolute bottom-[15%] right-[15%] h-28 w-4'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSection === 'project-one' ? 0 : 1,
            borderColor: colors.primary,
            backgroundColor: colors.secondary,
          }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='absolute top-[15%] right-[40%] h-10 w-36 border-4'
        />
      </div>
    </>
  )
}
