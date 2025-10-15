"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType; // 👈 Usamos React.ElementType en lugar de keyof JSX
};

export function Card({ children, className, as: Component = "div" }: CardProps) {
  const Comp = Component as React.ElementType;

  return (
    <Comp
      className={cn(
        "rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200",
        className
      )}
    >
      {children}
    </Comp>
  );
}
