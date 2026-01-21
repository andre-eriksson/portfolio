export type EmploymentType = 'full-time' | 'part-time' | 'contract';


export interface Job {
  imgSrc: string
  jobTitle: string
  jobLink: string
  jobType: EmploymentType
  position: string
  startDate: string
  endDate: string
  location: string
  points: string[]
}

export const jobs: Job[] = [
  {
    imgSrc:"/medieteknik.webp",
    jobTitle:"Chapter of Media Technology",
    jobLink: "https://www.medieteknik.com",
    jobType: 'contract',
    position:"Webmaster",
    startDate:"Jan 1, 2024",
    endDate:"Dec 31, 2025",
    location: "Stockholm, Sweden",
    points: ["Redesigned www.medieteknik.com from scratch", "Optimized backend for costs and saved around 2.900,00 SEK in annual costs"]
  }
]
