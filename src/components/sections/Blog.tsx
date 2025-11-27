import { Linkedin, MessageCircleCode, Twitter } from "lucide-react"
import { BlogCard } from "@/components/ui/BlogCard"
import { blogPosts } from "@/data/blogPosts"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

function Blog() {
  const headerRef = useScrollAnimation({ duration: 700 })

  // Left column refs (slide from left)
  const leftBlogRefs = [
    useScrollAnimation({ delay: 0, variant: "slideLeft" }),
    useScrollAnimation({ delay: 0.3, variant: "slideLeft" }),
    useScrollAnimation({ delay: 0.6, variant: "slideLeft" }),
  ]

  // Right column refs (slide from right)
  const rightBlogRefs = [
    useScrollAnimation({ delay: 0.15, variant: "slideRight" }),
    useScrollAnimation({ delay: 0.45, variant: "slideRight" }),
    useScrollAnimation({ delay: 0.75, variant: "slideRight" }),
  ]
  return (
    <section
      id="blogs"
      className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-12 md:py-16"
    >
      {/* Section header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="opacity-0 flex justify-between items-center"
      >
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-2xl">
            Writing & Insights
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            I like to write about software engineering, come check it out.
          </p>
        </div>
        <div className="text-right hidden md:flex md:flex-col md:justify-between">
          <p className="text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-50 md:block pt-1">
            Find me on social platforms:
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/daniel-podolsky-341901242/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden mr-1.5 items-center text-sm font-medium text-neutral-600 dark:text-neutral-300 underline-offset-4 hover:text-neutral-900 dark:hover:text-white hover:underline md:inline-flex"
            >
              <Linkedin className="mr-0.5 h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://bsky.app/profile/0shotdev.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden mr-1.5 items-center text-sm font-medium text-neutral-600 dark:text-neutral-300 underline-offset-4 hover:text-neutral-900 dark:hover:text-white hover:underline md:inline-flex"
            >
              <MessageCircleCode className="mr-0.5 h-4 w-4" />
              BlueSky
            </a>
            <a
              href="https://x.com/0shot_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center text-sm font-medium text-neutral-600 dark:text-neutral-300 underline-offset-4 hover:text-neutral-900 dark:hover:text-white hover:underline md:inline-flex"
            >
              <Twitter className="mr-0.5 h-4 w-4" />
              X.com
            </a>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post, index) => {
          // Determine which column this blog is in
          const isLeftColumn = index % 2 === 0 // Even indices = left column
          const columnIndex = Math.floor(index / 2) // Position within column

          // Select correct ref based on column
          const ref = isLeftColumn
            ? leftBlogRefs[columnIndex]
            : rightBlogRefs[columnIndex]

          return (
            <div
              key={post.id}
              ref={ref as React.RefObject<HTMLDivElement>}
              className="opacity-0 h-full"
            >
              <BlogCard post={post} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Blog
