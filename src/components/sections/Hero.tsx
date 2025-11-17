import { StatusBadge } from "@/components/ui/StatusBadge"
import {
  GraduationCap,
  Code2,
  Shield,
  Eye,
  FileText,
  Github,
  Mail,
  Award,
  Trophy,
  Linkedin,
} from "lucide-react"
import ShinyText from "@/components/ui/ShinyText"
import profilePic from "@/assets/images/ProfilePicture.jpg"
import SpotlightCard from "@/components/ui/SpotlightCard"

export function Hero() {
  return (
    <section className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.1fr)]">
      {/* Left Column */}
      <div className="flex flex-col space-y-6">
        {/* Status */}
        <StatusBadge text="Available for Full Stack & AI Software Engineer roles" />

        {/* Title & Subtitle */}
        <div className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl lg:text-5xl">
          <ShinyText
            text="Daniel Podolsky"
            disabled={false}
            speed={3}
            className="custom-class"
          />
          <p className="mt-2 text-base font-medium text-neutral-300 sm:text-lg">
            Full Stack Development | AI Integration Specialist
          </p>
        </div>

        {/* Description */}
        <div className="space-y-3 text-sm leading-relaxed text-neutral-400 md:text-[15px]">
          <p>
            I became a Full Stack Developer during my CS degree, and when I
            started working with AI, it unlocked something new. Now I build
            systems that combine thoughtful architecture with the power of LLMs
            - not chasing trends, but solving problems that weren't possible a
            few years ago.
          </p>
          <p>
            Before tech, I was a Combat Medic and Drone Operator in the Israeli
            Defense Force. I graduated with an 89 GPA from Holon Institute of
            Technology, but more importantly, I learned that good architecture
            comes before good code - I map out the system before writing code.
          </p>
          <p>
            My team from H.I.T. won 2nd place at the AWS Public Sector
            Innovation Hackathon with MentorHIT, an AI-powered mentoring
            platform using RAG and serverless AWS. Building its LLM query flow,
            and later my LLM-Powered Log Analyzer project, taught me the same
            lesson: language models do incredible things when you architect the
            system correctly.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          {/* Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-[11px] font-medium tracking-tight text-black shadow-sm transition-transform duration-150 hover:-translate-y-[1px] 
  hover:bg-white"
          >
            <Eye className="mr-1.5 h-[15px] w-[15px]" />
            View Projects
          </a>

          {/* Resume Button */}
          <a
            href="#resume"
            className="inline-flex items-center rounded-full border border-neutral-700/80 bg-transparent px-3.5 py-1.5 text-xs font-medium tracking-tight text-neutral-200 transition-all hover:border-neutral-400 
  hover:text-white hover:-translate-y-[1px]"
          >
            <FileText className="mr-1.5 h-[15px] w-[15px]" />
            Resume
          </a>

          {/* GitHub Button */}
          <a
            href="https://www.linkedin.com/in/daniel-podolsky-341901242/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-neutral-700/80 bg-transparent px-3.5 py-1.5 text-xs font-medium tracking-tight text-neutral-200 transition-all hover:border-neutral-400 
  hover:text-white hover:-translate-y-[1px]"
          >
            <Github className="mr-1.5 h-[15px] w-[15px]" />
            GitHub
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://github.com/DanielPodolsky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-neutral-700/80 bg-transparent px-3.5 py-1.5 text-xs font-medium tracking-tight text-neutral-200 transition-all hover:border-neutral-400 
  hover:text-white hover:-translate-y-[1px]"
          >
            <Linkedin className="mr-1.5 h-[15px] w-[15px]" />
            LinkedIn
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-neutral-700/80 bg-transparent px-3.5 py-1.5 text-xs font-medium tracking-tight text-neutral-200 transition-all hover:border-neutral-400 
  hover:text-white hover:-translate-y-[1px]"
          >
            <Mail className="mr-1.5 h-[15px] w-[15px]" />
            Contact
          </a>
        </div>

        {/* Mini Info Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-start">
          {/* Education */}
          <SpotlightCard spotlightColor="rgba(56, 189, 248, 0.15)">
            <div className="flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              <GraduationCap className="mr-1.5 h-[14px] w-[14px]" />
              Education
            </div>
            <p className="mt-1 text-[13px] font-medium text-neutral-100">
              B.Sc. Computer Science
            </p>
            {/* Expanded content - hidden by default, shows on hover */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-35 group-hover:opacity-100">
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-300">
                Holon Institute of Technology (H.I.T.) · 2025 · 89 GPA
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-400">
                Focus: JavaScript, React.js, Node.js, Express.js, MongoDB, AWS
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-500">
                Awarded an innovation and excellence honor from the institute's
                president.
              </p>
            </div>
          </SpotlightCard>

          {/* Focus */}
          <SpotlightCard spotlightColor="rgba(248, 146, 3, 0.15)">
            <div className="flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              <Code2 className="mr-1.5 h-[14px] w-[14px]" />
              Focus
            </div>
            <p className="mt-1 text-[13px] font-medium text-neutral-100">
              MERN Stack · AWS · AI
            </p>
            {/* Expanded content */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-35 group-hover:opacity-100">
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-300">
                Hackathons · Personal Projects
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                Adapting AI to my workflows. Currently exploring Claude Code and
                creating ideal agents for my missions.
              </p>
            </div>
          </SpotlightCard>

          {/* Background */}
          <SpotlightCard spotlightColor="rgba(74, 222, 128, 0.15)">
            <div className="flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              <Shield className="mr-1.5 h-[14px] w-[14px]" />
              Background
            </div>
            <p className="mt-1 text-[13px] font-medium text-neutral-100">
              Military → Tech
            </p>
            {/* Expanded content */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-35 group-hover:opacity-100">
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-300">
                Combat Medic · Sharpshooter · Drone Operator
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-400">
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
        <div className="order-2 md:order-none overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/70 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
          <div className="relative aspect-square">
            <img
              src={profilePic}
              alt="Daniel Podolsky profile picture"
              className="h-full w-full object-cover"
            />
            {/* Dark overlay for blending */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* AVAILABILITY STRIP - Secondary status indicator */}
        <div className="order-1 md:order-none rounded-2xl border border-neutral-700/60 bg-neutral-900/40 px-4 py-3.5">
          <div className="space-y-2.5">
            {/* 1st Place - H.I.T. Hackathon */}
            <div className="flex items-start gap-2">
              <Trophy className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-200">
                  1st Place · H.I.T. Hackathon
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-500">
                  Team project
                </p>
              </div>
            </div>

            {/* 2nd Place - AWS Hackathon */}
            <div className="flex items-start gap-2">
              <Award className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-200">
                  2nd Place · AWS Public Sector
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-500">
                  National Hackathon
                </p>
              </div>
            </div>

            {/* Exify Contributor */}
            <div className="flex items-start gap-2">
              <Code2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-tight text-neutral-200">
                  Exify Contributor
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-500">
                  1000+ active users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
