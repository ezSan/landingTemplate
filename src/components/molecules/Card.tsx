
import { cn } from "@/lib/utils"

export function Card({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("border rounded-lg p-4 bg-background shadow-sm", className)}>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <div>{children}</div>
        </div>
    )
}
