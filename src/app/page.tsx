'use client'

import CursorTrail from '@/app/brutalism/components/cursor'
import Grid from '@/app/brutalism/components/grid'
import AboutBrutalism from '@/app/brutalism/sections/about'
import ExperienceSection from '@/app/brutalism/sections/experience'
import ProjectTemplate from '@/app/brutalism/sections/project'
import { projects } from '@/data/projects'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState('about')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id') || ''
            setCurrentSection(sectionId)
          }
        }
      },
      {
        threshold: 0.5,
      }
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main
      ref={scrollRef}
      className='cursor-none relative h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-white'
    >
      <Grid className='z-50' />
      <CursorTrail currentSection={currentSection} />

      <section id='about' className='h-screen w-full snap-start'>
        <AboutBrutalism />
      </section>

      <section id='project-one' className='h-screen w-full snap-start'>
        <ProjectTemplate
          project={projects[0]}
          backgroundColor='#EEC912'
          color='#000000'
        />
      </section>

      <section id='experience' className='h-screen w-full snap-start'>
        <ExperienceSection />
      </section>
    </main>
  )
}
