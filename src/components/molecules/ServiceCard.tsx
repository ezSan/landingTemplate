"use client";

import { Card } from "@/components/atoms/Card";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
};

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className={className}>
        <div className="flex flex-col items-center text-center space-y-3">
          {icon && <div className="text-4xl text-[rgb(var(--color-primary))]">{icon}</div>}
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-[rgba(255,255,255,0.7)]">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
