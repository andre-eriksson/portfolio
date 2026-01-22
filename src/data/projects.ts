export interface Project {
  title: string
  description: string
  link: string
  techStack: string[]
}

export const projects: Project[] = [
  {
    title: "Rust Browser",
    description: "A simple web browser built using Rust.",
    link: "https://github.com/andre-eriksson/browser",
    techStack: ["Rust", "SQLite"]
  }
]
