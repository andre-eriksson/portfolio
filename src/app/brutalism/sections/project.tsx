'use client'

import type { Project } from '@/data/projects'
import {
  ArrowUpRightIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useInView } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import Github from 'public/github.svg'
import { useRef } from 'react'

interface Props {
  project: Project
  backgroundColor?: string
  color?: string
}

export default function ProjectTemplate({
  project,
  backgroundColor = '#FFFFFF',
  color = '#000000',
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <div
      className='relative flex h-full w-full items-center justify-center overflow-hidden'
      style={{
        backgroundColor,
        color,
      }}
    >
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
              <div className='font-mono text-sm uppercase tracking-widest border bg-white border-black px-2 py-1 flex'>
                <span>Project 0{project.id}</span>
                {project.startDate && (
                  <>
                    <span className='my-auto grow h-px bg-black mx-2' />
                    <span className='ml-2'>
                      {project.startDate} - {project.endDate ?? 'Ongoing'}
                    </span>
                  </>
                )}
              </div>
              {project.associatedWith && (
                <div className='font-mono text-sm uppercase tracking-widest border bg-white border-black px-2 py-1 flex'>
                  <span title='This project is associated with a company'>
                    A <b>{project.associatedWith.name}</b> project
                    <InformationCircleIcon
                      className='h-4 w-4 ml-2 inline hover:text-black/50 transition-colors duration-300'
                      onClick={() => {
                        const experienceSection =
                          document.getElementById('experience')
                        if (experienceSection) {
                          experienceSection.scrollIntoView({
                            behavior: 'smooth',
                          })
                        }
                      }}
                    />
                  </span>
                </div>
              )}
            </div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-5xl md:text-6xl font-black uppercase mb-6 tracking-tighter'
            >
              {project.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mb-6'
            >
              <div className='font-mono text-lg mb-4 border-l-4 border-black pl-4 relative z-20'>
                {project.description.split('\n').map((line, index) => (
                  <motion.p
                    // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className='whitespace-pre-line'
                  >
                    {line}
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
                {project.skills.map((skill) => (
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
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target='_blank'
                  className='brutalist-button bg-black text-white px-6 py-3 font-mono uppercase hover:bg-white hover:text-black border-2 border-black transition-colors duration-300 flex items-center gap-2 cursor-none'
                >
                  <Github className='size-5' />
                  <p>Repository</p>
                </Link>
              )}
              {project.demoLink && (
                <Link
                  href={project.demoLink}
                  target='_blank'
                  className='brutalist-button bg-white text-black px-6 py-3 font-mono uppercase hover:bg-black hover:text-white border-2 border-black transition-colors duration-300 flex items-center gap-2 cursor-none'
                >
                  <ArrowUpRightIcon className='size-5' />
                  Demo
                </Link>
              )}
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target='_blank'
                  className='brutalist-button bg-white text-black px-6 py-3 font-mono uppercase hover:bg-black hover:text-white border-2 border-black transition-colors duration-300 flex items-center gap-2 cursor-none'
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
                src={project.image}
                alt={project.title}
                className='object-cover bg-white'
                fill
              />
              <div className='absolute inset-0 hover:bg-black/10 bg-transparent transition-colors duration-300' />
            </div>

            {project.associatedWith && (
              <div className='absolute -bottom-8 -right-8 size-24 bg-white border-4 border-black font-mono text-xs p-2 overflow-hidden hidden md:block'>
                <Image
                  src={project.associatedWith?.logo}
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
