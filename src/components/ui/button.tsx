import { forwardRef, type ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-semibold transition-all duration-300"
    const sizeClass = size === "lg" ? "text-lg px-8 py-6" : "text-sm px-6 py-3"
    const variantClass =
      variant === "outline"
        ? "border border-emerald-300/20 text-emerald-200 bg-emerald-300/5 hover:bg-emerald-300/10 hover:border-emerald-300/40 backdrop-blur-md shadow-sm shadow-emerald-900/20"
        : "bg-emerald-300 text-emerald-950 hover:bg-emerald-200 shadow-lg shadow-emerald-900/40 font-semibold"
    return (
      <button
        ref={ref}
        className={`${base} ${sizeClass} ${variantClass} ${className}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
export type { ButtonProps }
