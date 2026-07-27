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
        ? "border border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 backdrop-blur-sm"
        : "bg-foreground text-background hover:bg-foreground/90 shadow-2xl"
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
