export interface BlogPost {
  id: string
  title: string
  summary: string // 2-3 sentence excerpt
  date: string // "Nov 2024" or "2024-11-15"
  readTime?: string // "5 min read"
  linkedInUrl: string
  tags?: string[] // ["AI", "Career"]
  images?: string[]
}
