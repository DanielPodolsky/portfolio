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
  Star,
} from "lucide-react"
import ShinyText from "@/components/ui/ShinyText"
import SpotlightCard from "@/components/ui/SpotlightCard"

const heroAvif400 = "/images/hero/hero-400.avif"
const heroAvif800 = "/images/hero/hero-800.avif"
const heroAvif1200 = "/images/hero/hero-1200.avif"
const heroWebp400 = "/images/hero/hero-400.webp"
const heroWebp800 = "/images/hero/hero-800.webp"
const heroWebp1200 = "/images/hero/hero-1200.webp"
const heroJpg400 = "/images/hero/hero-400.jpg"
const heroJpg800 = "/images/hero/hero-800.jpg"
const heroJpg1200 = "/images/hero/hero-1200.jpg"

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
          <div className="text-3xl tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-5xl">
            <ShinyText
              text="Daniel Podolsky"
              disabled={false}
              speed={7}
              className="custom-class font-heading"
            />
            <p className="font-heading mt-2 tracking-wide text-base font-medium text-neutral-600 dark:text-neutral-300 sm:text-lg">
              Full Stack Development | AI Workflow Architect
            </p>
            <p className="font-heading tracking-wide text-sm font-medium text-neutral-600 dark:text-neutral-300 sm:text-[16px]">
              Creator of <span className="text-[#4DDC7F]">ownyourcode.dev</span>{" "}
              (63+ GitHub Stars) and{" "}
              <span className="bg-linear-to-r from-[#E8985D] to-[#C15F3C] bg-clip-text text-transparent">
                Claude Code
              </span>{" "}
              enthusiast
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-[16px] text-justify hyphens-auto">
          <p>
            I became a Full Stack Developer during my CS degree. When I started
            working with AI, it unlocked a new dimension - building systems
            where LLMs aren't just features, but core architecture. I love
            creating solutions that weren't possible a few years ago, and I'm
            always looking for the next one.
          </p>
          <p>
            Before tech, I was a Combat Medic and Drone Operator in the Israeli
            Defense Force. I graduated with an 89 GPA from Holon Institute of
            Technology (H.I.T.), where I learned that good architecture comes
            before good code.
          </p>
          <p>
            My team from H.I.T. won 2nd place at the AWS Public Sector
            Innovation Hackathon with MentorHIT, an AI-powered mentoring
            platform using RAG and serverless AWS. Building that — and several
            personal projects with AI tools — made me pay close attention to how
            developers actually grow alongside AI. Research from Anthropic and
            MIT confirmed what I was seeing: cognitive offloading erodes
            ownership and long-term code maintainability. So I built OwnYourCode
            — a research-based AI-mentored development workflow built around a
            simple principle: more ownership, less dependency. The result is
            developers who strengthen their skills, not outsource them.
          </p>
          <p>
            Now I'm building agentic CLI tools with Claude Code, designing
            workflows that shape how developers interact with AI every day — and
            using that same workflow to sharpen my own full stack skills.
            OwnYourCode has earned 63 stars on GitHub, and this is the work I
            love — getting creative with AI and building things that are
            genuinely useful.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          {/* Projects Button */}
          <a
            href="#projects"
            className="font-heading inline-flex items-center rounded-full bg-neutral-900 dark:bg-neutral-100 px-4 py-2 text-xs font-medium tracking-tight text-white dark:text-black shadow-sm transition-all duration-150
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
                Building with Claude Code · Creator of OwnYourCode
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                Designing AI-mentored development workflows and agentic CLI
                tools that shape how developers grow alongside AI.
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
            <picture>
              {/* AVIF - best compression, modern browsers */}
              <source
                type="image/avif"
                srcSet={`${heroAvif400} 400w, ${heroAvif800} 800w, ${heroAvif1200} 1200w`}
                sizes="(max-width: 768px) 280px, 520px"
              />
              {/* WebP - good compression, wide support */}
              <source
                type="image/webp"
                srcSet={`${heroWebp400} 400w, ${heroWebp800} 800w, ${heroWebp1200} 1200w`}
                sizes="(max-width: 768px) 280px, 520px"
              />
              {/* JPG fallback */}
              <img
                src={heroJpg800}
                srcSet={`${heroJpg400} 400w, ${heroJpg800} 800w, ${heroJpg1200} 1200w`}
                sizes="(max-width: 768px) 280px, 520px"
                alt="Daniel Podolsky - Full Stack Developer"
                width={800}
                height={1070}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
              />
            </picture>
            {/* Dark overlay for blending */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/40 via-transparent to-transparent transition-colors duration-500" />
          </div>
        </div>

        <div className="order-1 md:order-none rounded-2xl border border-neutral-200/60 dark:border-neutral-700/60 bg-white/80 dark:bg-neutral-900/40 shadow-md dark:shadow-none px-4 py-3.5 transition-colors duration-500">
          <div className="space-y-2.5">
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

            {/* OwnYourCode */}
            <div className="flex items-start gap-2">
              <Star
                fill="currentColor"
                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-400"
              />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-900 dark:text-neutral-200">
                  Creator · OwnYourCode
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-600 dark:text-neutral-500">
                  ⭐ 63 on GitHub
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
