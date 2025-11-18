import { Linkedin } from "lucide-react"
import { BlogCard } from "@/components/ui/BlogCard"
import { blogPosts } from "@/data/blogPosts"

export function Blog() {
  return (
    <section
      id="blogs"
      className="border-b border-neutral-800/80 dark:border-neutral-200/80 py-12 md:py-16"
    >
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-50 dark:text-neutral-900 md:text-2xl">
            Writing & Insights
          </h2>
          <p className="mt-2 text-sm text-neutral-400 dark:text-neutral-500">
            I like to write about software engineering, come check it out.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/daniel-podolsky-341901242/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center text-xs font-medium text-neutral-300 dark:text-neutral-600 underline-offset-4 hover:text-white dark:hover:text-neutral-900 hover:underline md:inline-flex"
        >
          <Linkedin className="mr-1.5 h-4 w-4" />
          View all on LinkedIn
        </a>
      </div>

      {/* Blog posts grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
