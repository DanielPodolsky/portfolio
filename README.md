<a id="top"></a>

# Daniel Podolsky Portfolio

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![GitHub last commit](https://img.shields.io/github/last-commit/DanielPodolsky/portfolio)
![Lighthouse](https://img.shields.io/badge/Lighthouse-100-brightgreen?logo=lighthouse)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

A performant portfolio website built with React 19 and TypeScript, featuring an AI-powered assistant, premium UI interactions, and theme-aware design.

**Live**: [danielpodolsky.dev](https://danielpodolsky.dev)

<!-- TODO: Add hero screenshot or GIF demo here -->
<div align="center">
    <img width="2558" height="1318" alt="image" src="https://github.com/user-attachments/assets/de015f41-4356-4122-bbfc-92fc998d0f0c" />
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#available-scripts">Available Scripts</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#development-status">Development Status</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Built With

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic-Claude_Haiku_4.5-D4A27F?logo=anthropic&logoColor=white)
![Pinecone](https://img.shields.io/badge/Pinecone-Vector_DB-000000?logo=pinecone&logoColor=white)
![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-6.0-000000?logo=vercel&logoColor=white)

<p align="right">(<a href="#top">back to top</a>)</p>

## Overview

This portfolio showcases my transition from Combat Medic to Software Engineer through interactive project cards, technical blog posts, and a skills showcase. The site prioritizes performance, accessibility, and modern development patterns that reflect production-grade engineering practices.

<p align="right">(<a href="#top">back to top</a>)</p>

## Project Structure

```
├── api/                 # Vercel serverless functions (RAG chatbot)
├── knowledge/           # AI knowledge base (markdown files)
└── src/
    ├── assets/          # Static images and blog assets
    ├── components/
    │   ├── chat/        # AI chatbot components
    │   ├── layout/      # Layout primitives (Header, Footer, Layout)
    │   ├── sections/    # Page sections (Hero, Projects, Blog, Skills, Contact)
    │   └── ui/          # Reusable UI components (ProjectCard, BlogCard, SpotlightCard)
    ├── contexts/        # React Context providers (ThemeContext)
    ├── data/            # Static data (projects, skills, blog posts)
    ├── hooks/           # Custom React hooks
    ├── lib/             # Utility functions (cn helper)
    └── types/           # TypeScript type definitions
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Key Features

### Performance

- Code splitting via React.lazy and Suspense
- Image optimization with vite-plugin-image-optimizer
- Tailwind CSS v4 automatic tree-shaking
- Lighthouse score: 100

### AI Portfolio Assistant

An intelligent chatbot powered by RAG (Retrieval-Augmented Generation) that helps visitors and recruiters learn about my experience:

- **Real-time streaming** responses via Vercel AI SDK v6
- **Claude Haiku 4.5** for fast, accurate responses with strong instruction-following
- **Semantic search** through Pinecone vector database
- **Knowledge base** built from curated markdown files covering projects, skills, and background
- **Rate limiting** via Upstash Redis to prevent abuse

<p align="right">(<a href="#top">back to top</a>)</p>

## Development Status

### Planned

- [ ] Component testing with Vitest
- [ ] GitHub Actions CI/CD pipeline
- [ ] Hero section screenshot/GIF for README

### Completed

- [x] Vercel deployment with analytics
- [x] AI-powered portfolio assistant with RAG
- [x] Claude Haiku 4.5 integration with prompt hardening
- [x] Mobile UX optimization (keyboard behavior)

<p align="right">(<a href="#top">back to top</a>)</p>

## License

MIT

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

- **LinkedIn**: [daniel-podolsky-341901242](https://www.linkedin.com/in/daniel-podolsky-341901242/)
- **GitHub**: [DanielPodolsky](https://github.com/DanielPodolsky)
- **Email**: lambodol76@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- [Vercel AI SDK](https://sdk.vercel.ai/) - Streaming AI responses
- [Anthropic Claude](https://anthropic.com/) - AI model powering the chatbot
- [Pinecone](https://pinecone.io/) - Vector database for semantic search
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [GSAP](https://gsap.com/) - Premium animations
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Upstash](https://upstash.com/) - Serverless Redis for rate limiting

<p align="right">(<a href="#top">back to top</a>)</p>
