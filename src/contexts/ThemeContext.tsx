// createContext - creates the context obviously, useContext - Lets components access the context, useState - tracks current theme, useEffect - runs code when component mounts, type ReactNode is a TS type for children prop
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"

// Define what our context provides
interface ThemeContextType {
  theme: "dark" | "light" // Current theme
  toggleTheme: () => void // Function to toggle between themes
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined) // Initial value is undefined

// 3. Create the provider component (this wraps our app)
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Track current theme with state
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme")

    // Check system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    // Priority: saved > system > default
    const initialTheme = savedTheme
      ? (savedTheme as "dark" | "light")
      : systemPrefersDark
        ? "dark"
        : "light"

    setTheme(initialTheme)

    // Add/remove 'dark' class on <html> for Tailwind
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Create a custom hook (makes it easier to use)
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
