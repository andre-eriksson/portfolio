'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutNeubrutalism() {
  return (
    <section className='h-fit w-full px-4 bg-red-50 py-20 z-50 dark:bg-slate-900 dark:text-white'>
      <div className='container mx-auto'>
        <div className='grid gap-8 md:grid-cols-2 items-start'>
          <div className='w-full grid place-items-center'>
            <div className='xl:w-xl relative'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  rotate: -3,
                  scale: 1.05,
                  boxShadow: '10px 10px 0px 0px',
                  transition: { duration: 0.2 },
                }}
                className='relative w-[37vw] xl:w-full aspect-square bg-black border-4 border-black overflow-hidden transform rotate-3 shadow-[8px_8px_0px_0px] shadow-black dark:shadow-white'
              >
                <Image
                  src='/profile.jpg'
                  alt='Profile Picture'
                  fill
                  className='object-cover'
                  priority
                />
              </motion.div>
              <motion.div
                className='absolute -bottom-4 xl:-right-4 bg-[#FF6B6B] text-black font-bold text-xl p-4 border-4 border-black transform -rotate-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'
                whileHover={{
                  rotate: 2,
                  scale: 1.1,
                  y: -5,
                  boxShadow: '7px 7px 0px 0px rgba(0,0,0,1)',
                  transition: { duration: 0.2 },
                }}
              >
                Hello there!
              </motion.div>
            </div>
          </div>

          <div className='flex flex-col space-y-6'>
            <h1 className='text-center md:text-start text-5xl md:text-6xl font-black mb-4 tracking-tight'>
              I'm André Eriksson
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='md:min-w-min flex flex-row justify-center md:justify-start md:flex-col lg:flex-row items-center gap-8 md:gap-2 select-none font-mono tracking-tight'>
                <div className='flex flex-col md:flex-row items-center md:gap-2'>
                  <p className='w-fit text-xl px-2 py-1 -my-1 md:my-0 font-bold border-2 border-black bg-purple-300 -rotate-1 text-black shadow-[5px_5px_0px_0px] hover:shadow-[7px_7px_0px_0px] shadow-black dark:shadow-purple-200 transition-all duration-300 hover:rotate-0 hover:scale-105'>
                    Frontend Developer
                  </p>
                  <p className='w-fit text-xl px-2 py-1 font-bold border-2 border-black bg-yellow-300 rotate-1 text-black shadow-[5px_5px_0px_0px] hover:shadow-[7px_7px_0px_0px] shadow-black dark:shadow-yellow-200 transition-all duration-300 hover:rotate-0 hover:scale-105'>
                    Backend Developer
                  </p>
                </div>
                <div className='md:w-full lg:w-auto flex flex-col md:flex-row items-center md:gap-2'>
                  <p className='w-fit md:w-1/2 lg:w-fit h-fit text-xl px-2 py-1 -my-1 md:my-0 font-bold border-2 border-black bg-blue-300 -rotate-1 text-black shadow-[5px_5px_0px_0px] hover:shadow-[7px_7px_0px_0px] shadow-black dark:shadow-blue-200 transition-all duration-300 hover:rotate-0 hover:scale-105'>
                    Designer
                  </p>
                  <p className='w-fit md:w-1/2 lg:w-fit h-fit text-xl px-2 py-1 font-bold border-2 border-black bg-green-300 rotate-1 text-black shadow-[5px_5px_0px_0px] hover:shadow-[7px_7px_0px_0px] shadow-black dark:shadow-green-200 transition-all duration-300 hover:rotate-0 hover:scale-105'>
                    Student
                  </p>
                </div>
              </div>
            </motion.div>
            <p className='text-lg mb-6 font-mono self-center md:self-start'>
              I'm a passionate web developer with a knack for creating
              user-friendly and visually appealing websites. I thrive on
              challenges and enjoy learning new things. Currently, I'm studying
              at{' '}
              <span className='inline-block'>
                <a
                  href='https://www.kth.se/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-fit flex items-center gap-1 underline decoration-wavy decoration-2 underline-offset-4 font-bold'
                  title='KTH Royal Institute of Technology'
                  aria-label='KTH Royal Institute of Technology'
                >
                  <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                  KTH Royal Institute of Technology
                </a>
              </span>
              , where I'm honing my skills in web development and design.
            </p>

            <div className='w-fit flex flex-wrap gap-4'>
              <a
                href='https://github.com/andre-eriksson'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 shadow-[5px_5px_0px_0px] dark:shadow-[5px_5px_0px_0px] shadow-black dark:shadow-red-300 aspect-square flex items-center justify-center border-2 border-black dark:bg-white transition-all duration-300 hover:shadow-[7px_7px_0px_0px]'
                title='GitHub Profile'
                aria-label='GitHub Profile'
              >
                <Image src='/github.svg' alt='GitHub' width={32} height={32} />
              </a>
              <a
                href='https://www.linkedin.com/in/andr%C3%A9-eriksson-a0b05b329/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 shadow-[5px_5px_0px_0px] shadow-black dark:shadow-sky-300 aspect-square flex items-center justify-center border-2 border-black dark:bg-white transition-all duration-300 hover:shadow-[7px_7px_0px_0px]'
                title='LinkedIn Profile'
                aria-label='LinkedIn Profile'
              >
                <Image
                  src='/linkedin.svg'
                  alt='LinkedIn'
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
