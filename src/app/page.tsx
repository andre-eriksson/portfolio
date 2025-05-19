'use client'

import AboutBrutalism from '@/app/brutalism/sections/about'
import CursorTrail from '@/app/brutalism/components/cursor'
import FloatingElements from '@/app/brutalism/components/floating'
import ExperienceSection from '@/app/brutalism/sections/experience'
import Project1 from '@/app/brutalism/sections/project1'
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
        threshold: 0.5, // When at least 50% of the section is visible
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
      <CursorTrail />
      <FloatingElements currentSection={currentSection} />

      <section id='about' className='h-screen w-full snap-start'>
        <AboutBrutalism />
      </section>

      <section id='project-one' className='h-screen w-full snap-start'>
        <Project1 />
      </section>

      <section id='experience' className='h-screen w-full snap-start'>
        <ExperienceSection />
      </section>
    </main>
  )
}
