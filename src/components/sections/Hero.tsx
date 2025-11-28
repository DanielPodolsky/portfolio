import { StatusBadge } from "@/components/ui/StatusBadge"
import {
  GraduationCap,
  Code2,
  Shield,
  Eye,
  FileText,
  Github,
  Award,
  Trophy,
  Brain,
  Zap,
  Linkedin,
} from "lucide-react"
import ShinyText from "@/components/ui/ShinyText"
import profilePic from "@/assets/images/ProfilePicture.webp"
import SpotlightCard from "@/components/ui/SpotlightCard"

interface HeroProps {
  onResumeClick: () => void
}

function Hero({ onResumeClick }: HeroProps) {
  return (
    <section
      id="about"
      className="border-b border-neutral-200/80 dark:border-neutral-800/80 pb-12 md:pb-16 flex flex-col gap-8 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.1fr)]"
    >
      {/* Left Column */}
      <div className="flex flex-col space-y-6">
        <div>
          {/* Status */}
          <StatusBadge text="Available for Full Stack & AI Software Engineer roles" />

          {/* Title & Subtitle */}
          <div className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-5xl">
            <ShinyText
              text="Daniel Podolsky"
              disabled={false}
              speed={7}
              className="custom-class font-display"
            />
            <p className="font-heading mt-2 tracking-wide text-base font-medium text-neutral-600 dark:text-neutral-300 sm:text-lg">
              Full Stack Development | AI Integration Specialist
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-[15px] text-justify hyphens-auto">
          <p>
            I became a Full Stack Developer during my CS degree, and when I
            started working with AI, it unlocked something new. Now I build
            systems that combine thoughtful architecture with the power of LLMs
            - not chasing trends, but creating solutions that weren't possible a
            few years ago.
          </p>
          <p>
            Before tech, I was a Combat Medic and Drone Operator in the Israeli
            Defense Force. I graduated with a 89 GPA from Holon Institute of
            Technology (H.I.T.), but more importantly, I learned that good
            architecture comes before good code - I map out the system before
            writing code.
          </p>
          <p>
            My team from H.I.T. won 2nd place at the AWS Public Sector
            Innovation Hackathon with MentorHIT, an AI-powered mentoring
            platform using RAG and serverless AWS. Building its LLM query flow,
            and later my LLM-Powered Log Analyzer project, taught me the same
            lesson: language models do incredible things when you architect the
            system correctly.
          </p>
          <p>
            Now I'm building at that intersection - combining solid engineering
            fundamentals with the capabilities of modern AI. I want to create
            tools people will actually use.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          {/* Projects Button */}
          <a
            href="#projects"
            className="font-heading inline-flex items-center rounded-full bg-neutral-900 dark:bg-neutral-100 px-4 py-2 text-[11px] font-medium tracking-tight text-white dark:text-black shadow-sm transition-all duration-150
  hover:-translate-y-[1px] hover:bg-neutral-800 dark:hover:bg-white"
          >
            <Eye className="mr-1.5 h-[15px] w-[15px]" />
            View Projects
          </a>

          {/* Resume Button */}
          <button
            onClick={onResumeClick}
            className="font-heading inline-flex items-center rounded-full border border-neutral-300/80 dark:border-neutral-700/80 bg-transparent px-3.5 py-1.5 text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-200
  transition-all hover:border-neutral-500 dark:hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:-translate-y-[1px]"
          >
            <FileText className="mr-1.5 h-[15px] w-[15px]" />
            Resume
          </button>

          {/* GitHub Button */}
          <a
            href="https://github.com/DanielPodolsky"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading inline-flex items-center rounded-full border border-neutral-300/80 dark:border-neutral-700/80 bg-transparent px-3.5 py-1.5 text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-200
  transition-all hover:border-neutral-500 dark:hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:-translate-y-[1px]"
          >
            <Github className="mr-1.5 h-[15px] w-[15px]" />
            GitHub
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/daniel-podolsky-341901242/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading inline-flex items-center rounded-full border border-neutral-300/80 dark:border-neutral-700/80 bg-transparent px-3.5 py-1.5 text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-200
  transition-all hover:border-neutral-500 dark:hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:-translate-y-[1px]"
          >
            <Linkedin className="mr-1.5 h-[15px] w-[15px]" />
            LinkedIn
          </a>
        </div>

        {/* Mini Info Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-start">
          {/* Education */}
          <SpotlightCard spotlightColor="rgba(56, 189, 248, 0.15)">
            <div className="flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-600 dark:text-neutral-500">
              <GraduationCap className="mr-1.5 h-[14px] w-[14px]" />
              Education
            </div>
            <p className="mt-1 text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
              B.Sc. Computer Science
            </p>
            {/* Expanded content - hidden by default, shows on hover */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-35 group-hover:opacity-100">
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                Holon Institute of Technology (H.I.T.) · 2025 · 89 GPA
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                Focus: JavaScript, React.js, Node.js, Express.js, MongoDB, AWS
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-700 dark:text-neutral-500">
                Awarded an innovation and excellence honor from the institute's
                president.
              </p>
            </div>
          </SpotlightCard>

          {/* Focus */}
          <SpotlightCard spotlightColor="rgba(248, 146, 3, 0.15)">
            <div className="flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-600 dark:text-neutral-500">
              <Code2 className="mr-1.5 h-[14px] w-[14px]" />
              Focus
            </div>
            <p className="mt-1 text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
              MERN Stack · AWS · AI
            </p>
            {/* Expanded content */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-35 group-hover:opacity-100">
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                Hackathons · Personal Projects
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                Adapting AI to my workflows. Currently exploring Claude Code and
                creating ideal agents for my missions.
              </p>
            </div>
          </SpotlightCard>

          {/* Background */}
          <SpotlightCard spotlightColor="rgba(74, 222, 128, 0.15)">
            <div className="flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-600 dark:text-neutral-500">
              <Shield className="mr-1.5 h-[14px] w-[14px]" />
              Background
            </div>
            <p className="mt-1 text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
              Military → Tech
            </p>
            {/* Expanded content */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-35 group-hover:opacity-100">
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                Combat Medic · Sharpshooter · Drone Operator
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                Precision, systematic thinking, mission-critical mindset. Served
                in Unit 636 and honorably discharged in 2021.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Right Column */}
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-0 md:space-y-4">
        {/* PROFILE CARD - Visual anchor with heavy shadow */}
        <div
          className="order-2 md:order-none overflow-hidden rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/70 shadow-[0_18px_45px_rgba(0,0,0,0.12)]
  dark:shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-colors duration-500"
        >
          <div className="relative h-full min-h-[280px] md:aspect-square md:h-auto">
            <img
              src={profilePic}
              alt="Daniel Podolsky profile picture"
              className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
            />
            {/* Dark overlay for blending */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/40 via-transparent to-transparent transition-colors duration-500" />
          </div>
        </div>

        <div className="order-1 md:order-none rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60 bg-white/80 dark:bg-neutral-900/40 shadow-md dark:shadow-none px-4 py-3.5 transition-colors duration-500">
          <div className="space-y-2.5">
            {/* 1st Place - H.I.T. Hackathon */}
            <div className="flex items-start gap-2">
              <Trophy className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-900 dark:text-neutral-200">
                  1st Place · H.I.T. Hackathon
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-600 dark:text-neutral-500">
                  Institutional Hackathon
                </p>
              </div>
            </div>

            {/* 2nd Place - AWS Hackathon */}
            <div className="flex items-start gap-2">
              <Award className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-900 dark:text-neutral-200">
                  2nd Place · AWS Public Sector
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-600 dark:text-neutral-500">
                  National Hackathon
                </p>
              </div>
            </div>

            {/* Exify Contributor */}
            <div className="flex items-start gap-2">
              <Code2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-900 dark:text-neutral-200">
                  Exify Code Contributor
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-600 dark:text-neutral-500">
                  1000+ active users
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Brain className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-purple-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-900 dark:text-neutral-200">
                  AI Enthusiast
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-600 dark:text-neutral-500">
                  Thinking...
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Zap className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-orange-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-900 dark:text-neutral-200">
                  Basketball Player
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-600 dark:text-neutral-500">
                  On and off the court thinking about my next move
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
