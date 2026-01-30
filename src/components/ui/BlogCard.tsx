import { type BlogPost } from "@/types/blog"
import { ExternalLink, Calendar, Clock } from "lucide-react"
import BounceCards from "@/components/ui/BounceCards"

interface BlogCardProps {
  post: BlogPost
}

// Transform styles for the bouncing cards
const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
]

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="group flex flex-col rounded-2xl border border-black/[0.08] bg-black/[0.02] backdrop-blur-sm p-6 transition-all duration-200 hover:-translate-y-[2px] hover:border-black/20
    dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/20"
    >
      {/* BounceCards - only show if images exist */}
      {post.images && post.images.length > 0 && (
        <div className="mb-4 flex justify-center overflow-hidden">
          <div className="hidden md:block">
            <BounceCards
              images={post.images}
              containerWidth={500}
              containerHeight={250}
              animationDelay={0.5}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={false}
            />
          </div>
          <div className="md:hidden">
            <BounceCards
              images={post.images}
              containerWidth={320}
              containerHeight={160}
              cardSize={140}
              animationDelay={0.5}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={[
                "rotate(5deg) translate(-100px)",
                "rotate(0deg) translate(-50px)",
                "rotate(-5deg)",
                "rotate(5deg) translate(50px)",
                "rotate(-5deg) translate(100px)",
              ]}
              enableHover={false}
            />
          </div>
        </div>
      )}

      {/* Meta info */}
      <div className="flex items-center gap-3 text-[11px] text-neutral-500 dark:text-neutral-500">
        <span className="inline-flex items-center">
          <Calendar className="mr-1 h-3 w-3" />
          {post.date}
        </span>
        {post.readTime && (
          <span className="inline-flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            {post.readTime}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {post.title}
      </h3>

      {/* Summary */}
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">
        {post.summary}
      </p>

      {/* Bottom row */}
      <div className="mt-auto pt-4 flex items-center justify-between gap-4">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-neutral-500 dark:bg-white/[0.06] dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* LinkedIn CTA */}
        <a
          href={post.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[11px] font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors shrink-0"
        >
          Read on LinkedIn
          <ExternalLink className="ml-1.5 h-3 w-3" />
        </a>
      </div>
    </article>
  )
}
