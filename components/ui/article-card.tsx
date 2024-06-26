"use client"

import { useEffect, useState } from "react"
import { cx } from "class-variance-authority"
import { motion } from "framer-motion"
import { Link } from "next-view-transitions"

import { ArticleType } from "@/types/article"

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  article: ArticleType
  index: number
}

export function ArticleCard({
  className,
  article,
  index,
  ...props
}: ArticleCardProps) {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true)
    }, 100 * index)

    return () => clearTimeout(timeout)
  }, [index])

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={shouldAnimate && { y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 1.8,
        bounce: 0,
      }}
    >
      <Link href={`/${article.slug}`}>
        <section
          className={cx(
            "flex w-full justify-start items-start rounded p-2 px-3 bg-transparent hover:bg-[#F7F7F7] transition-colors cursor-pointer",
            className
          )}
          {...props}
        >
          <time
            className="w-24 shrink-0 text-sm font-normal text-[#AEAEB2]"
            dateTime={article.date}
          >
            {article.date}
          </time>
          <p className="flex items-center gap-2 text-[0.9375rem] font-medium text-[#484848]">
            {article.title}
            {article.summary !== "" ? (
              <span className="hidden text-sm font-medium text-[#AEAEB2] md:inline-block">
                {article.summary}
              </span>
            ) : null}
          </p>
        </section>
      </Link>
    </motion.div>
  )
}
