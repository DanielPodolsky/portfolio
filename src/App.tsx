import { Layout } from "@/components/layout/Layout"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Blog } from "@/components/sections/Blog"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App
