import { Layout } from "@/components/layout/Layout"
import { Header } from "@/components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Footer />
    </Layout>
  )
}

export default App
