import { useState, lazy, Suspense } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Layout } from "@/components/layout/Layout"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"

// Lazy load sections below the fold
const Projects = lazy(() => import("@/components/sections/Projects"))
const Blog = lazy(() => import("@/components/sections/Blog"))
const Skills = lazy(() => import("@/components/sections/Skills"))
const Contact = lazy(() => import("@/components/sections/Contact"))
const ResumeModal = lazy(() => import("@/components/ui/ResumeModal"))

// Loading fallback
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-700 border-t-neutral-400" />
    </div>
  )
}

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger, useGSAP)

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <Layout>
      <Header onResumeClick={() => setIsResumeOpen(true)} />
      <Hero onResumeClick={() => setIsResumeOpen(true)} />

      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Blog />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact onResumeClick={() => setIsResumeOpen(true)} />
      </Suspense>

      <Footer />

      <Suspense fallback={null}>
        {isResumeOpen && (
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
            pdfUrl="/resume.pdf"
          />
        )}
      </Suspense>
    </Layout>
  )
}

export default App
