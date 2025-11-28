import { Marquee } from "@/components/ui/Marquee"
import { skills } from "@/data/skills"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

function Skills() {
  const headerRef = useScrollAnimation({ duration: 700 })
  const skillsRef = useScrollAnimation({ duration: 700, delay: 0.2 })

  // Filter skills by category
  const coreSkills = skills.filter(s => s.category === "core")
  const cloudSkills = skills.filter(s => s.category === "cloud")
  const practicesSkills = skills.filter(s => s.category === "practices")
  const expandingSkills = skills.filter(s => s.category === "expanding")
  return (
    <section
      id="skills"
      className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-12 md:py-16"
    >
      {/* Section header */}
      <div ref={headerRef as React.RefObject<HTMLDivElement>} className="mb-8">
        <h2 className="tracking-wide text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-2xl">
          Technical Skills
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Focused on the MERN stack, AWS, and generative AI systems, with
          disciplined development practices.
        </p>
      </div>

      {/* Marquee rows */}
      <div
        ref={skillsRef as React.RefObject<HTMLDivElement>}
        className="space-y-4"
      >
        {/* Row 1: Core Stack - left */}
        <Marquee speed={25} direction="left">
          <div className="flex gap-3 pr-3">
            {coreSkills.map(skill => (
              <SkillPill key={skill.name} skill={skill} />
            ))}
          </div>
        </Marquee>

        {/* Row 2: Cloud & AI - right */}
        <Marquee speed={30} direction="right">
          <div className="flex gap-3 pr-3">
            {cloudSkills.map(skill => (
              <SkillPill key={skill.name} skill={skill} />
            ))}
          </div>
        </Marquee>

        {/* Row 3: Practices + Expanding - left */}
        <Marquee speed={35} direction="left">
          <div className="flex gap-3 pr-3">
            {[...practicesSkills, ...expandingSkills].map(skill => (
              <SkillPill key={skill.name} skill={skill} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

// Skill pill component
function SkillPill({ skill }: { skill: (typeof skills)[number] }) {
  const Icon = skill.icon

  return (
    <div
      className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 px-4 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-100
  whitespace-nowrap"
    >
      <Icon className="h-4 w-4" />
      <span>{skill.name}</span>
    </div>
  )
}

export default Skills
