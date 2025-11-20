# Daniel Podolsky Portfolio

A performant portfolio website built with React 19 and TypeScript, featuring premium UI interactions and theme-aware design.

**Live Demo**: [danielpodolsky.dev](https://danielpodolsky.dev)
**Repository**: [github.com/DanielPodolsky/portfolio](https://github.com/DanielPodolsky/portfolio)

### Built With

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)

## Overview

This portfolio showcases my transition from Combat Medic to Software Engineer through interactive project cards, technical blog posts, and a skills showcase. The site prioritizes performance, accessibility, and modern development patterns that reflect production-grade engineering practices.

## Getting Started

### Prerequisites

- Node.js 18 or higher

### Installation

```bash
git clone https://github.com/DanielPodolsky/portfolio.git
cd portfolio

npm install
npm run dev
```

The development server starts at `http://localhost:5173`.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── assets/              # Static images and blog assets
├── components/
│   ├── layout/          # Layout primitives (Header, Footer, Layout)
│   ├── sections/        # Page sections (Hero, Projects, Blog, Skills, Contact)
│   └── ui/              # Reusable UI components (ProjectCard, BlogCard, SpotlightCard)
├── contexts/            # React Context providers (ThemeContext)
├── data/                # Static data (projects, skills, blog posts)
├── hooks/               # Custom React hooks (planned)
├── lib/                 # Utility functions (cn helper)
└── types/               # TypeScript type definitions
```

## Available Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start development server with HMR   |
| `npm run build`        | Type-check and build for production |
| `npm run preview`      | Preview production build locally    |
| `npm run lint`         | Run ESLint on all files             |
| `npm run format`       | Format code with Prettier           |
| `npm run format:check` | Check formatting without writing    |

## Key Features

### Performance Considerations

- Code splitting via React.lazy and Suspense
- Image optimization with vite-plugin-image-optimizer
- Tailwind CSS v4 automatic tree-shaking

## Development Status

### Planned

- [ ] Component testing with Vitest
- [ ] GitHub Actions CI/CD pipeline
- [ ] Vercel deployment with analytics

## License

MIT

## Contact

- **LinkedIn**: [daniel-podolsky-341901242](https://www.linkedin.com/in/daniel-podolsky-341901242/)
- **GitHub**: [DanielPodolsky](https://github.com/DanielPodolsky)
- **Email**: lambodol76@gmail.com
