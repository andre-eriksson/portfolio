'use client'

import Grid from '@/app/brutalism/components/grid'
import { projects } from '@/data/projects'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useInView } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import Github from 'public/github.svg'
import { useRef } from 'react'

export default function Project1() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <div className='relative flex h-full w-full items-center justify-center bg-[#EEC912] text-black overflow-hidden'>
      <Grid />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='container mx-auto px-6 z-50'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
          <div className='flex flex-col justify-center'>
            <div className='mb-4 inline-block space-y-2'>
              <div className='font-mono text-sm uppercase tracking-widest border bg-white border-black px-2 py-1'>
                <span>Project 01</span>
              </div>
              {projects[0].associatedWith && (
                <div className='font-mono text-sm uppercase tracking-widest border bg-white border-black px-2 py-1'>
                  <span>{projects[0].associatedWith.name}</span>
                </div>
              )}
            </div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-5xl md:text-6xl font-black uppercase mb-6 tracking-tighter'
            >
              {projects[0].title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mb-6'
            >
              <div className='font-mono text-lg mb-4 border-l-4 border-black pl-4 relative z-20'>
                {inView &&
                  projects[0].description.split('\n').map((line, index) => (
                    <motion.p
                      // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className='whitespace-pre-line'
                    >
                      {line.split('').map((char, charIndex) => (
                        <motion.span
                          // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
                          key={charIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 0.5 + index * 0.1 + charIndex * 0.01,
                            duration: 0,
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.p>
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='mb-8'
            >
              <div className='flex flex-wrap gap-3'>
                {projects[0].skills.map((skill) => (
                  <span
                    key={skill}
                    className='border-2 border-black bg-white px-3 py-1 font-mono text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='flex flex-wrap gap-4'
            >
              {projects[0].githubLink && (
                <Link
                  href={projects[0].githubLink}
                  target='_blank'
                  className='brutalist-button bg-black text-white px-6 py-3 font-mono uppercase hover:bg-white hover:text-black border-2 border-black transition-colors duration-300 flex items-center gap-2'
                >
                  <Github className='size-5' />
                  <p>Repository</p>
                </Link>
              )}
              {projects[0].demoLink && (
                <Link
                  href={projects[0].demoLink}
                  target='_blank'
                  className='brutalist-button bg-white text-black px-6 py-3 font-mono uppercase hover:bg-black hover:text-white border-2 border-black transition-colors duration-300 flex items-center gap-2'
                >
                  <ArrowUpRightIcon className='size-5' />
                  Demo
                </Link>
              )}
              {projects[0].liveLink && (
                <Link
                  href={projects[0].liveLink}
                  target='_blank'
                  className='brutalist-button bg-white text-black px-6 py-3 font-mono uppercase hover:bg-black hover:text-white border-2 border-black transition-colors duration-300 flex items-center gap-2'
                >
                  <ArrowUpRightIcon className='size-5' />
                  Live
                </Link>
              )}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='relative flex items-center justify-center '
          >
            <div className='relative hidden sm:block sm:w-72 md:w-full aspect-square border-8 border-black overflow-hidden'>
              <Image
                src={projects[0].image}
                alt='Data Visualization Project'
                className='object-cover bg-white'
                fill
              />
              <div className='absolute inset-0 hover:bg-black/10 bg-transparent transition-colors duration-300' />
            </div>

            {projects[0].associatedWith && (
              <div className='absolute -bottom-8 -right-8 size-24 bg-white border-4 border-black font-mono text-xs p-2 overflow-hidden hidden md:block'>
                <Image
                  src={projects[0].associatedWith?.logo}
                  alt='Data Visualization Project'
                  className='object-cover bg-white p-2'
                  fill
                />
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
