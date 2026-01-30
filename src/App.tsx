import { Layout } from "@/components/layout/Layout"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </Layout>
  )
}

export default App
