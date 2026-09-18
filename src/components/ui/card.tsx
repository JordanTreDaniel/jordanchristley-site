import type { HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl bg-emerald-950/30 border border-emerald-300/15 backdrop-blur-md shadow-lg shadow-emerald-900/30 ${className}`}
      {...props}
    />
  )
}

export { Card }
export type { CardProps }
