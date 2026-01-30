import { Layout } from "@/components/layout/Layout"
import { Header } from "@/components/layout/Header"
import { Footer } from "./components/layout/Footer"

function App() {
  return (
    <Layout>
      <Header />
      {/* Temporary test content - will be replaced with sections in Phase 2 */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-neutral-50">Daniel Podolsky</h1>
        <p className="mt-4 text-lg text-neutral-300">
          Software Engineer · AI Integration Specialist
        </p>
        <p className="mt-8 max-w-2xl text-sm text-neutral-400">
          Phase 1 Complete: Layout, Header, and Footer are working! 🎉
          <br />
          Next up: Hero, About, Projects, Skills, Achievements, and Contact
          sections.
        </p>
      </div>
      <Footer />
    </Layout>
  )
}

export default App
