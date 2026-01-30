import { useState } from "react"
import { Layout } from "@/components/layout/Layout"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Blog } from "@/components/sections/Blog"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"
import { ResumeModal } from "@/components/ui/ResumeModal"

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <Layout>
      <Header onResumeClick={() => setIsResumeOpen(true)} />
      <Hero onResumeClick={() => setIsResumeOpen(true)} />
      <Projects />
      <Blog />
      <Skills />
      <Contact onResumeClick={() => setIsResumeOpen(true)} />
      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl="/resume.pdf"
      />
    </Layout>
  )
}

export default App
