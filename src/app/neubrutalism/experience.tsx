'use client'

import { type WorkPosition, workHistoryData } from '@/data/work-history'
import {
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  MapPinIcon,
  Square3Stack3DIcon,
  StarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })
}

const isCurrentPosition = (position: WorkPosition): boolean => {
  return !position.endDate
}

const getCompanyPeriod = (positions: WorkPosition[]): string => {
  if (!positions.length) return ''

  // Find earliest start date
  const startDates = positions.map((p) => new Date(p.startDate).getTime())
  const earliestStart = new Date(Math.min(...startDates))

  // Find latest end date or current
  const hasCurrent = positions.some((p) => !p.endDate)
  if (hasCurrent) {
    return `${formatDate(earliestStart.toISOString())} - Present`
  }
  const endDates = positions
    .filter(
      (p): p is WorkPosition & { endDate: string } => p.endDate !== undefined
    )
    .map((p) => new Date(p.endDate).getTime())
  const latestEnd = new Date(Math.max(...endDates))

  return `${formatDate(earliestStart.toISOString())} - ${formatDate(latestEnd.toISOString())}`
}

const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  const monthsDiff =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())

  const years = Math.floor(monthsDiff / 12)
  const months = monthsDiff % 12

  let duration = ''
  if (years > 0) {
    duration += `${years} year${years > 1 ? 's' : ''}`
  }
  if (months > 0 || years === 0) {
    if (years > 0) duration += ' '
    duration += `${months} month${months > 1 ? 's' : ''}`
  }

  return duration
}

export default function Experience() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(
    'medieteknik'
  )
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null)

  const toggleCompany = (companyId: string) => {
    setExpandedCompany(expandedCompany === companyId ? null : companyId)
  }

  const togglePosition = (positionId: string) => {
    setExpandedPosition(expandedPosition === positionId ? null : positionId)
  }

  return (
    <section className='min-h-screen w-full py-12 px-4 bg-yellow-50 z-10 dark:bg-neutral-800 dark:text-white'>
      <div className='container mx-auto max-w-4xl'>
        <div className='relative'>
          <h2 className='text-4xl font-black mb-2 text-center uppercase tracking-tight text-black'>
            <span className='inline-block -rotate-1 bg-pink-400 px-4 py-1 shadow-[5px_5px_0px_0px] shadow-black dark:shadow-pink-200'>
              Professional
            </span>{' '}
            <span className='inline-block rotate-1 bg-blue-400 px-4 py-1 shadow-[5px_5px_0px_0px] shadow-black dark:shadow-blue-200'>
              Experience
            </span>
          </h2>
          <p className='text-center mb-10 max-w-xl mx-auto font-mono mt-4'>
            A chronological overview of my professional journey, highlighting
            key roles and accomplishments.
          </p>
          <ul className='space-y-8'>
            {workHistoryData.map((company, companyIndex) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='relative'
              >
                <motion.div
                  className={`relative z-10 p-6 rounded-none border-4 dark:text-white border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px] shadow-black dark:shadow-white transition-all duration-200 ${
                    expandedCompany === company.id
                      ? company.id === 'medieteknik'
                        ? 'bg-yellow-100 dark:bg-yellow-400/40'
                        : [
                            companyIndex % 3 === 0
                              ? 'bg-pink-200 dark:bg-pink-400/40'
                              : '',
                            companyIndex % 3 === 1
                              ? 'bg-blue-200 dark:bg-blue-400/40'
                              : '',
                            companyIndex % 3 === 2
                              ? 'bg-green-200 dark:bg-green-400/40'
                              : '',
                          ].join('')
                      : 'bg-white dark:bg-neutral-950'
                  }`}
                  onClick={() => toggleCompany(company.id)}
                >
                  <div className='flex flex-col sm:flex-row gap-6 items-center sm:items-start'>
                    <div className='shrink-0 relative'>
                      <div className='w-16 h-16 rounded-none overflow-hidden bg-white dark:bg-neutral-900 flex items-center justify-center border-2 border-black dark:border-white'>
                        <Image
                          src={company.logo || '/globe.svg'}
                          alt={`${company.name} logo`}
                          width={80}
                          height={80}
                          className='object-contain p-1'
                        />
                      </div>
                    </div>

                    <div className='flex-1 text-center sm:text-left'>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-1'>
                        <h2 className='text-xl font-black uppercase'>
                          {company.name}
                        </h2>
                        <div className='hidden sm:block'>•</div>
                        <div className='text-sm flex items-center justify-center sm:justify-start gap-1 font-mono'>
                          <BuildingOffice2Icon className='w-4 h-4' />
                          <span>{company.industry}</span>
                        </div>
                      </div>

                      <div className='flex flex-col sm:flex-row items-center gap-3 text-sm mb-2 font-mono'>
                        <div className='flex items-center gap-1'>
                          <MapPinIcon className='w-4 h-4' />
                          <span>{company.location}</span>
                        </div>

                        <div className='hidden sm:block'>•</div>

                        <div className='flex items-center gap-1'>
                          <CalendarIcon className='w-4 h-4' />
                          <span>{getCompanyPeriod(company.positions)}</span>
                        </div>

                        {company.website && (
                          <>
                            <div className='hidden sm:block'>•</div>

                            <a
                              href={company.website}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-1 underline decoration-wavy decoration-2 underline-offset-4 font-bold'
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                              <span>Website</span>
                            </a>
                          </>
                        )}
                      </div>

                      <div className='text-sm font-mono'>
                        <span className='font-bold'>
                          {company.positions.length} position{' '}
                          {company.positions.length !== 1 ? 's' : ''} held
                        </span>
                      </div>
                    </div>

                    <div className='shrink-0'>
                      <motion.div
                        animate={{
                          rotate: expandedCompany === company.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className='bg-black text-white w-8 h-8 flex items-center justify-center'
                      >
                        <ChevronDownIcon className='w-5 h-5' />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {expandedCompany === company.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='pl-4 sm:pl-12 mt-8 space-y-8 relative'
                    >
                      <div className='absolute left-2 sm:left-8 top-2 bottom-2 w-2 bg-black dark:bg-white mb-0' />

                      {company.positions.map((position, positionIndex) => (
                        <motion.div
                          key={position.id}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: 0.05 * positionIndex,
                            duration: 0.3,
                          }}
                          className='relative'
                        >
                          <div className='pl-6 sm:pl-8'>
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 45 }}
                              className={`absolute left-0 sm:left-6 top-6 w-6 h-6 z-10 border-2 border-black dark:border-white ${
                                isCurrentPosition(position)
                                  ? company.id === 'medieteknik'
                                    ? 'bg-yellow-500'
                                    : [
                                        positionIndex % 3 === 0
                                          ? 'bg-pink-500'
                                          : '',
                                        positionIndex % 3 === 1
                                          ? 'bg-blue-500'
                                          : '',
                                        positionIndex % 3 === 2
                                          ? 'bg-green-500'
                                          : '',
                                      ].join('')
                                  : 'bg-white'
                              }`}
                            />
                            <motion.div
                              className={`p-5 rounded-none bg-white dark:bg-neutral-950 border-4 border-black shadow-[6px_6px_0px_0px] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px] shadow-black dark:shadow-white transition-all duration-200 ${
                                expandedPosition === position.id && [
                                  positionIndex % 3 === 0 ? 'bg-pink-100' : '',
                                  positionIndex % 3 === 1 ? 'bg-blue-100' : '',
                                  positionIndex % 3 === 2 ? 'bg-green-100' : '',
                                ]
                              }`}
                              onClick={() => togglePosition(position.id)}
                            >
                              <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>
                                <div className='flex items-center gap-2'>
                                  <BriefcaseIcon className='w-5 h-5' />
                                  <h3 className='text-lg font-black uppercase '>
                                    {position.title}
                                  </h3>
                                </div>

                                <div className='w-fit text-xs font-bold py-1 px-3 rounded-none bg-black text-white border-2 border-black capitalize'>
                                  {position.type}
                                </div>
                              </div>

                              <div className='flex items-center gap-2 text-sm font-mono mb-3'>
                                <CalendarIcon className='w-3.5 h-3.5' />
                                <span>
                                  {formatDate(position.startDate)} -{' '}
                                  {isCurrentPosition(position)
                                    ? 'Present'
                                    : formatDate(position.endDate || '')}
                                </span>
                                <span className='text-xs px-2 py-0.5 bg-black text-white font-bold'>
                                  {calculateDuration(
                                    position.startDate,
                                    position.endDate
                                  )}
                                </span>
                              </div>

                              <p className='text-sm mb-3 font-mono'>
                                {position.description}
                              </p>

                              {position.teamSize && (
                                <div className='flex items-center gap-2 text-sm mb-3 font-mono'>
                                  <UsersIcon className='w-3.5 h-3.5' />
                                  <span>
                                    Team of {position.teamSize} people
                                  </span>
                                </div>
                              )}

                              <div className='mb-3'>
                                <div className='flex items-center gap-2 text-sm font-bold mb-2 uppercase'>
                                  <Square3Stack3DIcon className='w-3.5 h-3.5' />
                                  <span>Skills</span>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                  {position.skills.map((skill, skillIndex) => (
                                    <span
                                      key={skill}
                                      className={`text-xs px-2 py-1 font-bold border-2 border-black ${
                                        skillIndex % 3 === 0
                                          ? 'bg-pink-300'
                                          : skillIndex % 3 === 1
                                            ? 'bg-blue-300'
                                            : 'bg-green-300'
                                      } text-black rotate-[-1deg]`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className='flex justify-between items-center mt-2 border-t-2 border-black dark:border-white pt-2'>
                                <div className='text-sm font-bold flex items-center gap-1 uppercase'>
                                  <StarIcon className='w-3.5 h-3.5' />
                                  <span>Key Achievements</span>
                                </div>

                                <motion.div
                                  animate={{
                                    rotate:
                                      expandedPosition === position.id
                                        ? 180
                                        : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                  className='bg-black text-white w-6 h-6 flex items-center justify-center'
                                >
                                  <ChevronDownIcon className='w-4 h-4' />
                                </motion.div>
                              </div>

                              <AnimatePresence>
                                {expandedPosition === position.id && (
                                  <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='mt-3 pl-1 space-y-2'
                                  >
                                    {position.achievements.map(
                                      (achievement, achievementIndex) => (
                                        <motion.li
                                          key={achievement}
                                          initial={{ x: -5, opacity: 0 }}
                                          animate={{ x: 0, opacity: 1 }}
                                          transition={{
                                            delay: 0.05 * achievementIndex,
                                            duration: 0.3,
                                          }}
                                          className='flex gap-2 text-sm font-mono'
                                        >
                                          <CheckCircleIcon className='w-4 h-4 shrink-0 mt-0.5' />
                                          <span>{achievement}</span>
                                        </motion.li>
                                      )
                                    )}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
