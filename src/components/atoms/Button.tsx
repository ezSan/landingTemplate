import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "primary" &&
            "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary",
          variant === "outline" &&
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-ring",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
