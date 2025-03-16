export type PositionType =
  | 'internship'
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'freelance'

export type WorkPosition = {
  id: string
  title: string
  startDate: string
  endDate?: string
  description: string
  responsibilities: string[]
  achievements: string[]
  skills: string[]
  teamSize?: number
  type: PositionType
}

export type Company = {
  id: string
  name: string
  logo: string
  industry: string
  location: string
  website: string
  positions: WorkPosition[]
}

export const workHistoryData: Company[] = [
  {
    id: 'medieteknik',
    name: 'Chapter of Media Technology',
    logo: '/medieteknik.png',
    industry: 'Web Development and IT',
    location: 'Stockholm, Sweden',
    website: 'https://www.medieteknik.com',
    positions: [
      {
        id: 'Webmaster',
        title: 'Webmaster',
        startDate: '2024-01-01',
        description:
          "I initiated and led a project to revamp the chapter's website, focusing on enhancing user experience and accessibility. I also took charge of the chapter's IT-related tasks, ensuring smooth operations and efficient communication channels.",
        responsibilities: [
          "Maintaining and updating the chapter's website.",
          "Supporting the chapter with IT-related tasks for the organization's accounts.",
          'Engaged in user experience research and development for the chapter.',
        ],
        achievements: [
          "Redesigned the chapter's website to improve user experience and accessibility.",
          "Reduced the expenditure of the chapter's IT-related systems by roughly 250$/year (~75%).",
          "Oversaw the expansion of the chapter's communication channels, including the introduction of a new Discord server.",
        ],
        skills: [
          'Next.JS',
          'TypeScript',
          'IT Administration',
          'Web Development',
          'GCP',
        ],
        type: 'contract',
      },
    ],
  },
]
