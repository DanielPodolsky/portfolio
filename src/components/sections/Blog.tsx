import { Linkedin } from "lucide-react"
import { BlogCard } from "@/components/ui/BlogCard"
import { blogPosts } from "@/data/blogPosts"

function Blog() {
  return (
    <section
      id="blogs"
      className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-12 md:py-16"
    >
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-2xl">
            Writing & Insights
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            I like to write about software engineering, come check it out.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/daniel-podolsky-341901242/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center text-xs font-medium text-neutral-600 dark:text-neutral-300 underline-offset-4 hover:text-neutral-900 dark:hover:text-white hover:underline md:inline-flex"
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

export default Blog
