import type { HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl bg-foreground/10 border border-foreground/20 backdrop-blur-md shadow-2xl ${className}`}
      {...props}
    />
  )
}

export { Card }
export type { CardProps }
