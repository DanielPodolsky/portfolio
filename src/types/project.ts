export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  achievements?: string[]
  featured?: boolean
  type?: string // "AWS-native AI system", "Browser extension"
  problem?: string // What problem it solves
  solution?: string // How you solved it
  impact?: string // Results/metrics
}
