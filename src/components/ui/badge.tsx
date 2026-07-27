import type { HTMLAttributes } from "react"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "secondary"
}

function Badge({ className = "", variant, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-foreground/10 text-foreground border border-foreground/20 hover:bg-foreground/20 transition-colors duration-300 backdrop-blur-sm ${className}`}
      {...props}
    />
  )
}

export { Badge }
export type { BadgeProps }
