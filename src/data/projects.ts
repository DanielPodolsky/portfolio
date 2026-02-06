import { type Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "mentorhit",
    title: "MentorHIT",
    description:
      "AI-powered academic mentoring platform that provides personalized guidance to students using RAG-enhanced LLMs and institutional knowledge bases.",
    techStack: ["React/Vite", "Teamwork", "AWS", "RAG", "LLMs", "Serverless"],
    githubUrl: "https://github.com/MentorHIT",
    liveUrl: "",
    achievements: ["2nd Place Winner · AWS Hackathon"],
    featured: true,
    type: "Full-stack Application",
    problem:
      "Students lack access to personalized academic guidance and mentorship at scale, while educational institutions struggle to provide individualized support to growing student populations.",
    solution:
      "Built an intelligent mentoring platform leveraging AWS Bedrock LLMs with RAG implementation using OpenSearch for context-aware responses. Designed serverless architecture with AWS Lambda, enabling students to receive personalized academic guidance based on institutional knowledge and have real-time job market insights.",
    impact:
      "Recognized with 2nd place at AWS Public Sector Innovation Hackathon for innovative application of AI in education, demonstrating practical solution for scaling academic support services.",
  },
  {
    id: "llm-powered-log-analyzer",
    title: "LLM-Powered Log Analyzer",
    description:
      "Intelligent system that automates anomaly detection and root-cause classification using LLMs.",
    techStack: ["React/Vite", "Python", "Docker", "LLMs"],
    githubUrl: "https://github.com/DanielPodolsky/LLM-Powered-Log-Analyzer",
    liveUrl: "https://www.youtube.com/watch?v=n0CQCidOSUM",
    achievements: ["Personal Project"],
    featured: true,
    type: "Full-stack Application",
    problem:
      "Manual log analysis is time-consuming and error-prone, delaying incident response for critical issues like database failures, network outages, and security breaches.",
    solution:
      "Architected and built a containerized microservices platform with React frontend, Node.js analyzer service, and Python LLM service. Implemented factory pattern for LLM provider abstraction (Hugging Face, OpenAI), statistical analysis engine, and automated email alerting with rate limiting. Engineered error handling with graceful degradation and timeout protection.",
    impact:
      "Automates detection and classification of critical infrastructure issues into root cause categories with actionable AI-powered recommendations, enabling faster incident response.",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A premium portfolio built with modern React patterns, TypeScript, and performance optimization.",
    techStack: ["React/Vite", "TypeScript", "Tailwind v4", "shadcn/ui"],
    githubUrl: "https://github.com/DanielPodolsky/portfolio",
    liveUrl: "https://danielpodolsky.dev",
    achievements: ["Lighthouse 100"],
    featured: true,
    type: "Frontend application",
    problem: "No portfolio :(",
    solution: "Build a portfolio!",
    impact:
      "Deepened understanding of modern React patterns, component-driven architecture, Vite build optimization, and production-grade frontend practices including accessibility and performance tuning.",
  },
  {
    id: "ownyourcode",
    title: "OwnYourCode",
    description:
      "An AI-mentored development workflow where AI guides and you build. Designed to help developers strengthen their skills, take ownership of their code, and grow independently. More ownership, less dependency.",
    techStack: [
      "Claude Code",
      "MCP Protocol",
      "Skill & Agent Architecture",
      "Shell/Bash",
    ],
    githubUrl: "https://github.com/DanielPodolsky/ownyourcode",
    liveUrl: "https://ownyourcode.dev",
    achievements: ["63+ GitHub Stars"],
    featured: true,
    type: "AI Developer Tooling",
    problem:
      "Research from Anthropic and MIT highlights that cognitive offloading onto AI can gradually erode code ownership and long-term maintainability. For developers who want to grow their skills alongside AI - not just ship faster - there was no workflow built for that.",
    solution:
      "A structured mentorship workflow where AI asks the right questions instead of giving answers, verifies everything against official documentation, reviews code through six quality gates before completion, and captures learnings in a flywheel that compounds knowledge across every project.",
    impact:
      "63+ GitHub stars and growing, adopted by developers who want to strengthen their skills alongside AI. The learning flywheel compounds knowledge across every project — each task makes the next one smarter. Designed to make itself less needed over time.",
  },
]
