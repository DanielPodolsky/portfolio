import { X, Download, ExternalLink } from "lucide-react"
import { useEffect } from "react"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
}

function ResumeModal({ isOpen, onClose, pdfUrl }: ResumeModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl mx-4 h-[90vh] flex flex-col rounded-2xl border border-neutral-800 dark:border-neutral-200 bg-neutral-950 dark:bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 dark:border-neutral-200">
          <h2 className="text-sm font-semibold text-neutral-100 dark:text-neutral-900">
            Resume
          </h2>
          <div className="flex items-center gap-2">
            {/* Open in new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-700 dark:border-neutral-300 px-3 py-1.5 text-[11px] font-medium text-neutral-200 dark:text-neutral-700 transition-colors 
  hover:border-neutral-500 hover:text-white dark:hover:text-neutral-900"
            >
              <ExternalLink className="mr-1.5 h-3 w-3" />
              Open
            </a>
            {/* Download */}
            <a
              href={pdfUrl}
              download="DanielPodolskyCV.pdf"
              className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-black dark:text-white transition-colors hover:bg-white 
  dark:hover:bg-neutral-800"
            >
              <Download className="mr-1.5 h-3 w-3" />
              Download
            </a>
            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white dark:hover:text-neutral-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 p-4">
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-lg border border-neutral-800 dark:border-neutral-200"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeModal
