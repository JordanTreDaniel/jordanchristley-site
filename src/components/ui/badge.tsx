import type { HTMLAttributes } from "react"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "secondary"
}

function Badge({ className = "", variant, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-emerald-300/5 text-emerald-100 border border-emerald-300/20 hover:bg-emerald-300/10 hover:border-emerald-300/30 transition-colors duration-300 backdrop-blur-md shadow-sm shadow-emerald-900/20 ${className}`}
      {...props}
    />
  )
}

export { Badge }
export type { BadgeProps }
