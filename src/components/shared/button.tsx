import { cn } from "@/lib/utils";
import type { FC } from "react";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode
}
const Button: FC<ButtonProps> = ( { children, variant = "primary", ...props}) => {
  return (
    <button
      {...props}
      className={cn(
        "p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70",
        variant === "primary" && "bg-accent-purple",
        variant === "secondary" && "bg-background-tertiary",
        variant === "ghost" && "border-border-primary",
        props.className
      )}
    >
      {children}
    </button>
  );
}


export { Button}