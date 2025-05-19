'use client'

import Grid from '@/app/brutalism/components/grid'
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Github from 'public/github.svg'
import LinkedIn from 'public/linkedin.svg'
import { useEffect, useState } from 'react'

export default function AboutBrutalism() {
  const [currentTime, setCurrentTime] = useState('')
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString(undefined, {
          timeZone: 'Europe/Stockholm',
        })
      )
      setCurrentDate(
        now.toLocaleDateString(undefined, {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
          timeZone: 'Europe/Stockholm',
        })
      )
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])
  const scrollToNext = () => {
    const nextSection = document.getElementById('project-one')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='relative flex h-full w-full items-center justify-center bg-white text-black overflow-hidden'>
      <Grid />

      <div className='container mx-auto px-6 z-50'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-4 inline-block space-y-4'
          >
            <div className='relative font-mono text-sm uppercase tracking-widest border border-black px-2 py-1'>
              Portfolio / 2025
            </div>
            <div className='mb-6 border border-black p-4 bg-white relative'>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  delay: 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className='absolute -top-2 -left-2 w-4 h-4 bg-black'
              />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  delay: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className='absolute -bottom-2 -right-2 w-4 h-4 bg-black'
              />

              <div className='flex flex-col gap-2 font-mono text-sm'>
                <div className='flex items-center gap-2'>
                  <MapPinIcon className='min-w-4 size-4' />
                  <span>STOCKHOLM, SWEDEN</span>
                </div>
                <div className='flex items-center gap-2'>
                  <ClockIcon className='min-w-4 size-4' />
                  <span>
                    {currentTime} &bull; {currentDate}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <EnvelopeIcon className='min-w-4 size-4' />
                  <a
                    href='mailto:andreeriksson444@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline text-gray-500 hover:text-gray-400 transition-colors duration-300 cursor-none'
                  >
                    andreeriksson444@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-[8vw] md:text-[6vw] font-black uppercase leading-none mb-6 tracking-tighter'
          >
            <p>
              ANDRÉ <span className='text-outline'>PONTUS</span>
            </p>
            <p>ERIKSSON</p>
          </motion.h1>

          <div className='flex flex-col md:flex-row gap-8 md:gap-16 mb-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='max-w-md'
            >
              <p className='font-mono text-lg mb-4'>
                I am a developer based in Stockholm, Sweden.
              </p>
              <p className='font-mono text-lg'>
                I currently work as a full-stack developer at{' '}
                <a
                  href='https://www.medieteknik.com/'
                  target='_blank'
                  className='text-[#EEC912]/90 hover:text-[#EEC912] transition-colors duration-300 cursor-none'
                  rel='noopener noreferrer'
                >
                  @Medieteknik
                </a>
                , where I focus on improving the digital experience for the
                chapter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='flex flex-col gap-4 font-mono'
            >
              <div className='flex items-center gap-2'>
                <span className='w-4 h-4 bg-black' />
                <span>Web Development</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-4 h-4 bg-black' />
                <span>User Interface</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-4 h-4 bg-black' />
                <span>User Experience</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='flex flex-wrap gap-4'
          >
            <Link
              href='#project-one'
              onClick={(e) => {
                e.preventDefault()
                scrollToNext()
              }}
              className='brutalist-button bg-black text-white px-6 py-3 font-mono uppercase hover:bg-white hover:text-black border-2 border-black transition-colors duration-300'
            >
              View Projects (1)
            </Link>
            <Link
              href='#contact'
              className='brutalist-button bg-white text-black px-6 py-3 font-mono uppercase hover:bg-black hover:text-white border-2 border-black transition-colors duration-300'
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className='mt-12 flex gap-6'
          >
            <Link
              href='https://github.com'
              target='_blank'
              className='border-2 border-black p-2 hover:bg-black hover:text-white transition-colors duration-300'
            >
              <Github className='size-6' />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              className='border-2 border-black p-2 hover:bg-black hover:text-white transition-colors duration-300'
            >
              <LinkedIn className='size-6' />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
