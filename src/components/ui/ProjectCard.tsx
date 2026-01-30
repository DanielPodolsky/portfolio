import { Github, ExternalLink, Trophy, Users, Award } from "lucide-react"
import { type Project } from "@/types/project"
import SpotlightCard from "@/components/ui/SpotlightCard"

interface ProjectCardProps {
  project: Project
}

// Helper to determine badge color based on achievement text
function getAchievementStyle(achievement: string) {
  if (achievement.toLowerCase().includes("winner")) {
    return "border-amber-400/40 bg-amber-500/10 text-amber-600 dark:text-amber-300"
  }
  return "border-emerald-400/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
}

// Helper to get icon for achievement
function getAchievementIcon(achievement: string) {
  if (achievement.toLowerCase().includes("2nd")) {
    return <Award className="mr-1.5 h-3.5 w-3.5" />
  }
  if (achievement.toLowerCase().includes("1st")) {
    return <Trophy className="mr-1.5 h-3.5 w-3.5" />
  }
  return <Users className="mr-1.5 h-3.5 w-3.5" />
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <SpotlightCard className="flex flex-col p-5 transition-transform duration-150 hover:-translate-y-[2px]">
      {/* Top row: Achievement + Type */}
      <div className="flex items-center justify-between">
        {/* Achievement badges */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.achievements.map(achievement => (
              <span
                key={achievement}
                className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${getAchievementStyle(achievement)}`}
              >
                {getAchievementIcon(achievement)}
                {achievement}
              </span>
            ))}
          </div>
        )}

        {/* Type indicator */}
        {project.type && (
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
            {project.type}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {project.description}
      </p>

      {/* Problem / Solution / Impact grid */}
      {(project.problem || project.solution || project.impact) && (
        <div className="mt-4 flex flex-col gap-3 text-justify hyphens-auto">
          {project.problem && (
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 via-red-600/5 to-transparent p-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-red-500 dark:text-red-400">
                Problem
              </p>
              <p className="mt-1 text-[13px] text-neutral-700 dark:text-neutral-200">
                {project.problem}
              </p>
            </div>
          )}
          {project.solution && (
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent p-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-500 dark:text-emerald-400">
                Solution
              </p>
              <p className="mt-1 text-[13px] text-neutral-700 dark:text-neutral-200">
                {project.solution}
              </p>
            </div>
          )}
          {project.impact && (
            <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-sky-600/5 to-transparent p-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sky-500 dark:text-sky-400">
                Impact
              </p>
              <p className="mt-1 text-[13px] text-neutral-700 dark:text-neutral-200">
                {project.impact}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Bottom row: Tech stack (left) + Links (right) */}
      <div className="mt-auto pt-4 flex items-center justify-between gap-4">
        {/* Tech stack badges */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-600 dark:text-neutral-300">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10 backdrop-blur-md text-neutral-700 dark:text-neutral-200 px-2.5 py-1 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 text-xs shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[11px] font-medium text-neutral-700 dark:text-neutral-200 underline-offset-4 hover:text-neutral-900 dark:hover:text-white hover:underline"
            >
              <Github className="mr-1.5 h-3.5 w-3.5" />
              View code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[11px] font-medium text-neutral-700 dark:text-neutral-200 underline-offset-4 hover:text-neutral-900 dark:hover:text-white hover:underline"
            >
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  )
}
