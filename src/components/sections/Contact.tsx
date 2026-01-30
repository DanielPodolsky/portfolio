import { Mail, Linkedin, Github, Download, Send } from "lucide-react"
import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"

interface ContactProps {
  onResumeClick: () => void
}

function Contact({ onResumeClick }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus("success")
      setFormData({ name: "", email: "", message: "" }) // Reset form
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="pt-12 md:pt-16">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {/* Left: Contact info */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-2xl">
            Let's Talk
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            If you're hiring for a Full Stack or AI-focused Software Engineer
            role, I'm interested in conversations where there is ownership,
            clear impact, and meaningful technical challenges.
          </p>

          {/* Contact cards */}
          <div className="mt-6 space-y-4 text-sm">
            <a
              href="mailto:lambodol76@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 px-3.5 py-3 transition-colors hover:border-neutral-400
  dark:hover:border-neutral-600"
            >
              <Mail className="h-[18px] w-[18px] text-neutral-700 dark:text-neutral-200" />
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Email
                </p>
                <p className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
                  lambodol76@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/daniel-podolsky-341901242/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 px-3.5 py-3 transition-colors hover:border-neutral-400
  dark:hover:border-neutral-600"
            >
              <Linkedin className="h-[18px] w-[18px] text-neutral-700 dark:text-neutral-200" />
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  LinkedIn
                </p>
                <p className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
                  Connect on LinkedIn
                </p>
              </div>
            </a>

            <a
              href="https://github.com/DanielPodolsky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 px-3.5 py-3 transition-colors hover:border-neutral-400
  dark:hover:border-neutral-600"
            >
              <Github className="h-[18px] w-[18px] text-neutral-700 dark:text-neutral-200" />
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  GitHub
                </p>
                <p className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
                  See my work
                </p>
              </div>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <button
              onClick={onResumeClick}
              className="inline-flex items-center rounded-full bg-neutral-900 dark:bg-neutral-100 px-4 py-2 text-[11px] font-medium tracking-tight text-white dark:text-black shadow-sm transition-all duration-150
  hover:-translate-y-[1px] hover:bg-neutral-800 dark:hover:bg-white"
            >
              <Download className="mr-1.5 h-[15px] w-[15px]" />
              View Resume
            </button>{" "}
          </div>
        </div>

        {/* Right: Contact form */}
        <div
          id="contact-form"
          className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.1)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.85)]"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            Send a message
          </p>
          <p className="mt-2 text-[13px] text-neutral-600 dark:text-neutral-300">
            Share a role description, problem space, or idea. I'll do my best to
            respond quickly.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-sm">
            <div>
              <label
                htmlFor="name"
                className="text-[12px] font-medium text-neutral-700 dark:text-neutral-200"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={e =>
                  setFormData(prev => ({ ...prev, name: e.target.value }))
                }
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-[13px] text-neutral-900 dark:text-neutral-100 outline-none
  transition-shadow placeholder:text-neutral-500 focus:border-neutral-500 dark:focus:border-neutral-400 focus:shadow-[0_0_0_1px_rgba(212,212,216,0.6)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[12px] font-medium text-neutral-700 dark:text-neutral-200"
              >
                Work email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={e =>
                  setFormData(prev => ({ ...prev, email: e.target.value }))
                }
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-[13px] text-neutral-900 dark:text-neutral-100 outline-none
  transition-shadow placeholder:text-neutral-500 focus:border-neutral-500 dark:focus:border-neutral-400 focus:shadow-[0_0_0_1px_rgba(212,212,216,0.6)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[12px] font-medium text-neutral-700 dark:text-neutral-200"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Briefly describe the role, team, or problem you'd like to solve together."
                value={formData.message}
                onChange={e =>
                  setFormData(prev => ({ ...prev, message: e.target.value }))
                }
                className="mt-1 w-full resize-none rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-[13px] text-neutral-900 dark:text-neutral-100 outline-none
  transition-shadow placeholder:text-neutral-500 focus:border-neutral-500 dark:focus:border-neutral-400 focus:shadow-[0_0_0_1px_rgba(212,212,216,0.6)]"
              />
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-500 dark:text-neutral-400">
              <p>
                By submitting, you agree to be contacted about relevant
                opportunities.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center rounded-full bg-neutral-900 dark:bg-neutral-100 px-4 py-2 text-[11px] font-medium tracking-tight text-white dark:text-black shadow-sm transition-all duration-150
  hover:-translate-y-[1px] hover:bg-neutral-800 dark:hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-1.5 h-[15px] w-[15px]" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Typical response time: &lt; 24 hours
              </p>
            </div>

            {status === "success" && (
              <p className="text-[12px] text-emerald-400">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-[12px] text-red-400">
                Failed to send message. Please try again or email directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
