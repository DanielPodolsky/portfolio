import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/contexts/ThemeContext.tsx"
import { inject } from "@vercel/analytics"
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual"
}
// Run after browser's scroll restoration attempt
window.addEventListener("load", () => {
  // Remove hash if present (prevents anchor scrolling)
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname)
  }
  window.scrollTo(0, 0)
})

inject()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
