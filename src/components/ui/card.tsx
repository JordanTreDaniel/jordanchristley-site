import type { HTMLAttributes } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl bg-emerald-900/35 border border-emerald-300/15 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(7,27,24,0.45),inset_0_1px_0_0_rgba(215,255,227,0.06)] ${className}`}
      {...props}
    />
  )
}

export { Card }
export type { CardProps }
