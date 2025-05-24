'use client'
import { workHistoryData } from '@/data/work-history'
import {
  CalendarIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useInView } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <div className='relative flex h-full w-full items-center bg-[#121212] text-white overflow-hidden'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='container mx-auto px-6 z-10 py-12 overflow-y-auto max-h-screen hide-scrollbar'
      >
        <div className='mb-8 md:mb-12'>
          <div className='mb-4 inline-block'>
            <div className='font-mono text-sm uppercase tracking-widest border border-white px-2 py-1'>
              Work Experience
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-5xl md:text-6xl font-black uppercase mb-6 tracking-tighter'
          >
            CAREER
            <br />
            TIMELINE
          </motion.h2>
        </div>

        <div className='space-y-16 md:space-y-24 relative'>
          <div className='absolute left-4 md:left-1/2 top-2 -bottom-24 w-px bg-white/30 -ml-px' />

          {workHistoryData.map((job, index) => (
            <motion.div
              id={job.name}
              key={job.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className='relative'
            >
              <div className='flex items-center mb-6 md:mb-8'>
                <div className='absolute left-4 md:left-1/2 w-6 h-6 bg-white border-4 border-[#121212] rounded-full -ml-3' />
                <Image
                  src={job.logo}
                  alt={job.name}
                  width={50}
                  height={50}
                  className={`border-4 absolute left-4 md:left-1/2 -ml-5 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                />
                <div
                  className={`font-mono text-xl md:text-2xl font-bold uppercase tracking-wider ${
                    index % 2 === 0
                      ? 'md:text-right pl-12 md:pl-0 md:pr-12'
                      : 'md:pl-12'
                  } w-full md:w-1/2`}
                >
                  {job.name}
                </div>
              </div>

              <div className='pl-12 md:pl-0'>
                {job.positions.map((position) => (
                  <div
                    key={position.title}
                    className={`mb-8 border-2 border-white p-6 bg-[#121212] border-b-8 ${
                      index % 2 === 0
                        ? 'md:mr-8 md:ml-auto md:border-r-8'
                        : 'md:ml-12 md:mr-auto md:border-l-8'
                    } md:w-[calc(50%-3rem)]`}
                  >
                    <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4'>
                      <h3 className='text-xl font-black uppercase mb-2 md:mb-0'>
                        {position.title}
                      </h3>
                      <div className='flex items-center font-mono text-sm text-white/70'>
                        <CalendarIcon className='mr-2 size-4' />
                        {position.startDate} - {position.endDate || 'Present'}
                      </div>
                    </div>

                    <p className='font-mono text-sm mb-4 border-l-4 border-white/50 pl-4'>
                      {position.description}
                    </p>

                    <div className='mb-4'>
                      <h4 className='text-sm font-bold uppercase mb-2 flex items-center'>
                        <StarIcon className='mr-2 size-4' />
                        Key Achievements
                      </h4>
                      <ul className='space-y-2'>
                        {position.achievements.map((achievement, i) => (
                          <li key={achievement} className='flex items-start'>
                            <ChevronRightIcon className='mr-2 mt-0.5 flex-shrink-0 size-4' />
                            <span className='font-mono text-sm'>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='text-sm font-bold uppercase mb-2 flex items-center'>
                        <CodeBracketIcon className='mr-2 size-4' />
                        Technologies
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {position.skills.map((skill, i) => (
                          <span
                            key={skill}
                            className='border border-white px-2 py-1 font-mono text-xs'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
