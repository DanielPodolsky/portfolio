import { type IconType } from "react-icons"
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonwebservices,
  SiOpenai,
  SiDocker,
  SiGithubactions,
  SiAnthropic,
  SiHuggingface,
} from "react-icons/si"
import {
  Brain,
  Search,
  Cpu,
  GitBranch,
  Settings2,
  Users,
  Rocket,
  Workflow,
  MessageSquare,
  Cloud,
  Terminal,
  Code2,
} from "lucide-react"
import { type LucideIcon } from "lucide-react"

export interface Skill {
  name: string
  icon: IconType | LucideIcon
  category: "core" | "cloud" | "practices" | "expanding"
}

export const skills: Skill[] = [
  // Core Stack
  { name: "React", icon: SiReact, category: "core" },
  { name: "TypeScript", icon: SiTypescript, category: "core" },
  { name: "JavaScript", icon: SiJavascript, category: "core" },
  { name: "Node.js", icon: SiNodedotjs, category: "core" },
  { name: "Express.js", icon: SiExpress, category: "core" },
  { name: "MongoDB", icon: SiMongodb, category: "core" },
  { name: "HTML5", icon: SiHtml5, category: "core" },
  { name: "CSS3", icon: SiCss3, category: "core" },

  // Cloud & AI
  { name: "AWS", icon: SiAmazonwebservices, category: "cloud" },
  { name: "Amazon Bedrock", icon: Brain, category: "cloud" },
  { name: "OpenSearch", icon: Search, category: "cloud" },
  { name: "S3", icon: Cloud, category: "cloud" },
  { name: "Generative AI", icon: Cpu, category: "cloud" },
  { name: "LLM Integration", icon: SiOpenai, category: "cloud" },
  { name: "RAG Systems", icon: Brain, category: "cloud" },

  // Development Practices
  { name: "RESTful APIs", icon: Workflow, category: "practices" },
  { name: "Git & GitHub", icon: GitBranch, category: "practices" },
  { name: "Agile/Scrum", icon: Users, category: "practices" },
  { name: "Claude", icon: SiAnthropic, category: "practices" },
  { name: "Claude Code", icon: Terminal, category: "practices" },
  { name: "OpenAI", icon: SiOpenai, category: "practices" },
  { name: "Kiro IDE", icon: Code2, category: "practices" },
  { name: "Hugging Face", icon: SiHuggingface, category: "practices" },

  // Currently Expanding
  { name: "Next.js", icon: Rocket, category: "expanding" },
  { name: "Docker", icon: SiDocker, category: "expanding" },
  { name: "GitHub Actions", icon: SiGithubactions, category: "expanding" },
  { name: "Prompt Engineering", icon: MessageSquare, category: "expanding" },
]
