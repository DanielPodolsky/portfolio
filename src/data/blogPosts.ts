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

// Claude Opus 4.5 images
import opus1 from "@/assets/blogs/opus-45-update/1764043449337.jpeg"
import opus2 from "@/assets/blogs/opus-45-update/1764043449364.jpeg"
import opus3 from "@/assets/blogs/opus-45-update/1764043449382.jpeg"
import opus4 from "@/assets/blogs/opus-45-update/1764043449519.jpeg"
import opus5 from "@/assets/blogs/opus-45-update/1764043452900.jpeg"

export const blogPosts: BlogPost[] = [
  {
    id: "opus-45-update",
    title:
      "Claude Opus 4.5's 'Effort' Parameter: 76% Fewer Tokens, Same Performance as Sonnet 4.5",
    summary:
      "Before you build your next AI agent, you need to see what Claude Opus 4.5 just unlocked. Anthropic's latest release brings features that fundamentally change how we handle cost, context, and performance in agentic workflows—and most developers don't know about them yet.",
    date: "Nov 2025",
    readTime: "Short read",
    linkedInUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7398963653431001088/?originTrackingId=GID2YSybSBf%2FbnrRwrIZJQ%3D%3D",
    tags: ["Claude", "LLM", "Agentic AI", "Cost Optimization"],
    images: [opus1, opus2, opus3, opus4, opus5],
  },
  {
    id: "kiro-ide-prompt-engineering",
    title: "Spec-Driven Development with Amazon Kiro IDE",
    summary:
      "Amazon's new IDE turns your prompts into structured specs before writing a single line of code. Here's how I use it, plus a repo of ready-made prompt templates.",
    date: "Nov 2025",
    readTime: "Short read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_promptengineering-softwarearchitecture-ai-activity-7389549150222041088-x8K3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["Prompt Engineering", "Kiro IDE", "AI", "Architecture"],
    images: [kiro1],
  },
  {
    id: "udemy-schedule-gpt-bot",
    title: "A GPT Bot for Structured Learning Schedules",
    summary:
      "Tired of opening courses randomly and losing consistency? I built a GPT bot that turns any course into a Google Calendar schedule. Try it free.",
    date: "Oct 2025",
    readTime: "Short read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_daniel-the-curriculum-wizard-activity-7374676160594640896-JWym?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["GPT", "Automation", "Education", "Productivity"],
    images: [udemy1, udemy2, udemy3, udemy4],
  },
  {
    id: "mentorhit-aws-hackathon",
    title: "MentorHIT: 2nd Place at AWS Public Sector Hackathon",
    summary:
      "What if every CS student had an AI mentor from day one? We built it with a Two-Stage LLM Pipeline on Amazon Bedrock - and took 2nd place at AWS National Hackathon for Public Sector.",
    date: "Sep 2025",
    readTime: "Medium read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_genai-fullstack-aws-activity-7372864220683497472-GO-N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["AWS", "Hackathon", "GenAI", "RAG", "Amazon Bedrock"],
    images: [mentorhit1, mentorhit2, mentorhit3, mentorhit4, mentorhit5],
  },
  {
    id: "claude-code-best-practices",
    title: "Claude Code Tips for Beginners",
    summary:
      "Co-authored with Gil Yona. Stop letting Claude jump straight to code — here's the workflow that actually works, plus a tool that enforces it.",
    date: "Sep 2025",
    readTime: "Short read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_claude-code-quick-setup-with-cc-sessions-activity-7369602713279533059-hO-8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["Claude Code", "AI", "Development Workflow", "cc-sessions"],
    images: [claudeCode1, claudeCode2, claudeCode3, claudeCode4, claudeCode5],
  },
  {
    id: "claude-hebrew-chrome-extension",
    title: "Chrome Extension: Hebrew RTL Fix for Claude",
    summary:
      "Hebrew-English text chaos in Claude? I built a free Chrome extension to fix it. 4 styling options, RTL ordering, and cleaner conversations.",
    date: "Aug 2025",
    readTime: "Short read",
    linkedInUrl:
      "https://www.linkedin.com/posts/daniel-podolsky-341901242_claude-rtl-chrome-extension-activity-7364638873638887424-UwVX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxKVKEBFQb1QPr3_awt4ru_k8GAHiaYcKs",
    tags: ["Chrome Extension", "Hebrew", "Claude", "Open Source"],
    images: [hebrew1, hebrew2, hebrew3, hebrew4, hebrew5, hebrew6],
  },
]
