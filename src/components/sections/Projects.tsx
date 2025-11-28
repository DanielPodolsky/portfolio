import { Github } from "lucide-react"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { projects } from "@/data/projects"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

function Projects() {
  // Animate the section header
  const headerRef = useScrollAnimation({ duration: 700 })

  // Animate each project with stagger delays
  const projectRefs = [
    useScrollAnimation({ delay: 0 }),
    useScrollAnimation({ delay: 0.15 }),
    useScrollAnimation({ delay: 0.2 }),
  ]
  return (
    <section
      id="projects"
      className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-12 md:py-16"
    >
      {/* Section header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="opacity-0 flex items-center justify-between"
      >
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-2xl">
            Featured projects
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Each project is built around a concrete problem, measurable impact,
            and a clear architecture.
          </p>
        </div>
        <a
          href="https://github.com/DanielPodolsky?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading hidden items-center text-xs font-medium text-neutral-600 dark:text-neutral-300 underline-offset-4 hover:text-neutral-900 dark:hover:text-white hover:underline md:inline-flex"
        >
          <Github className="mr-1.5 h-4 w-4" />
          View all repositories
        </a>
      </div>

      {/* Projects grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={projectRefs[index] as React.RefObject<HTMLDivElement>}
            className="opacity-0 h-full"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
