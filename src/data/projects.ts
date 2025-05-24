import { type Company, workHistoryData } from '@/data/work-history'

interface Part {
  title: string
  description: string
  image: string
  skills: string[]
}

export interface Project {
  id: number
  title: string
  description: string
  startDate?: string
  endDate?: string
  image: string
  githubLink?: string
  liveLink?: string
  demoLink?: string
  skills: string[]
  associatedWith?: Company
  parts?: Part[] // For fullstack projects
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Medieteknik Website',
    description:
      "A solo project focused on a complete redesign of the Medieteknik website and systems, from the ground up. A fullstack project aimed to improve the usability and accessibility of the chapter's website. New features include a new design, event calendar, social media integration, recruitment listings for chapter committees and more!",
    image: '/medieteknik.jpeg',
    startDate: '2024-01-01',
    skills: ['Python', 'TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    githubLink: 'https://github.com/medieteknik-kth/medieteknik.com',
    liveLink: 'https://medieteknik.com',
    associatedWith: workHistoryData[0],
  },
]
