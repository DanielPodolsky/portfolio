import { Github } from "lucide-react"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { projects } from "@/data/projects"

function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-neutral-800/80 dark:border-neutral-200/80 py-12 md:py-16"
    >
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-50 dark:text-neutral-900 md:text-2xl">
            Featured projects
          </h2>
          <p className="mt-2 text-sm text-neutral-400 dark:text-neutral-500">
            Each project is built around a concrete problem, measurable impact,
            and a clear architecture.
          </p>
        </div>
        <a
          href="https://github.com/DanielPodolsky?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center text-xs font-medium text-neutral-300 dark:text-neutral-600 underline-offset-4 hover:text-white dark:hover:text-neutral-900 hover:underline md:inline-flex"
        >
          <Github className="mr-1.5 h-4 w-4" />
          View all repositories
        </a>
      </div>

      {/* Projects grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
