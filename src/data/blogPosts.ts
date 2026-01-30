import { type BlogPost } from "@/types/blog"

// MentorHIT images
import mentorhit1 from "@/assets/blogs/mentorhit-aws-hackathon/1.jpeg"
import mentorhit2 from "@/assets/blogs/mentorhit-aws-hackathon/2.jpeg"
import mentorhit3 from "@/assets/blogs/mentorhit-aws-hackathon/3.jpeg"
import mentorhit4 from "@/assets/blogs/mentorhit-aws-hackathon/4.jpeg"
import mentorhit5 from "@/assets/blogs/mentorhit-aws-hackathon/5.jpeg"

// Kiro IDE image
import kiro1 from "@/assets/blogs/kiro-ide-prompt-engineering/1761793539851.jpeg"

// Claude Code Best Practices images
import claudeCode1 from "@/assets/blogs/claude-code-best-practices/1757037065528-1.png"
import claudeCode2 from "@/assets/blogs/claude-code-best-practices/1757037065528-2.png"
import claudeCode3 from "@/assets/blogs/claude-code-best-practices/1757037065528-3.png"
import claudeCode4 from "@/assets/blogs/claude-code-best-practices/1757037065528-4.png"
import claudeCode5 from "@/assets/blogs/claude-code-best-practices/1757037065528-5.png"

// Udemy GPT Bot images
import udemy1 from "@/assets/blogs/udemy-schedule-gpt-bot/1758246184322-1.png"
import udemy2 from "@/assets/blogs/udemy-schedule-gpt-bot/1758246184322-2.png"
import udemy3 from "@/assets/blogs/udemy-schedule-gpt-bot/1758246184322-3.png"
import udemy4 from "@/assets/blogs/udemy-schedule-gpt-bot/1758246184322-4.png"

// Hebrew Chrome Extension images
import hebrew1 from "@/assets/blogs/claude-hebrew-chrome-extension/1-1.png"
import hebrew2 from "@/assets/blogs/claude-hebrew-chrome-extension/1-2.png"
import hebrew3 from "@/assets/blogs/claude-hebrew-chrome-extension/1-3.png"
import hebrew4 from "@/assets/blogs/claude-hebrew-chrome-extension/1-4.png"
import hebrew5 from "@/assets/blogs/claude-hebrew-chrome-extension/1-5.png"
import hebrew6 from "@/assets/blogs/claude-hebrew-chrome-extension/1-6.png"

export const blogPosts: BlogPost[] = [
  {
    id: "mentorhit-aws-hackathon",
    title: "Building MentorHIT: From Campus Hackathon to AWS National Finals",
    summary:
      "How we built an AI-powered academic mentoring platform using Amazon Bedrock and RAG architecture, and won 2nd place at the AWS Public Sector Innovation Hackathon representing Holon Institute of Technology.",
    date: "Nov 2024",
    readTime: "7 min read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_genai-fullstack-aws-activity-7372864220683497472-GO-N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["AWS", "Hackathon", "GenAI", "Architecture", "RAG"],
    images: [mentorhit1, mentorhit2, mentorhit3, mentorhit4, mentorhit5],
  },
  {
    id: "kiro-ide-prompt-engineering",
    title: "Practical Prompt Engineering with Amazon Kiro IDE",
    summary:
      "A deep dive into Amazon's Kiro IDE and spec-driven development. Learn how to use Agent Steering files, Hooks, and MCP integrations to write consistent, high-quality code through effective prompt engineering.",
    date: "Nov 2025",
    readTime: "8 min read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_promptengineering-softwarearchitecture-ai-activity-7389549150222041088-x8K3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["Prompt Engineering", "Kiro IDE", "AI", "Best Practices"],
    images: [kiro1],
  },
  {
    id: "claude-code-best-practices",
    title: "Essential Tips for Getting Started with Claude Code",
    summary:
      "A practical guide to maximizing Claude Code effectiveness, featuring cc-sessions workflow, context management strategies, and GitHub integration tips. Co-authored with Gil Yona.",
    date: "Nov 2024",
    readTime: "5 min read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_claude-code-quick-setup-with-cc-sessions-activity-7369602713279533059-hO-8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["Claude Code", "AI", "Development Workflow", "Productivity"],
    images: [claudeCode1, claudeCode2, claudeCode3, claudeCode4, claudeCode5],
  },
  {
    id: "udemy-schedule-gpt-bot",
    title: "Building a GPT Bot to Auto-Schedule Your Learning Path",
    summary:
      "Created a custom GPT bot that transforms Udemy courses into structured Google Calendar schedules, solving the problem of inconsistent learning habits through systematic time management.",
    date: "Nov 2024",
    readTime: "4 min read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_daniel-the-curriculum-wizard-activity-7374676160594640896-JWym?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["GPT", "Automation", "Education", "Productivity"],
    images: [udemy1, udemy2, udemy3, udemy4],
  },
  {
    id: "claude-hebrew-chrome-extension",
    title: "Solving Hebrew-English Text Chaos in Claude",
    summary:
      "Built a free Chrome extension that fixes RTL/LTR text mixing issues in Claude, featuring 4 styling options and English word highlighting for cleaner, more readable AI conversations.",
    date: "Nov 2024",
    readTime: "3 min read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_claude-rtl-chrome-extension-activity-7364638873638887424-UwVX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["Chrome Extension", "Hebrew", "Claude", "UX", "Open Source"],
    images: [hebrew1, hebrew2, hebrew3, hebrew4, hebrew5, hebrew6],
  },
]
