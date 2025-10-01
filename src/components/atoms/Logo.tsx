import Link from "next/link";

export default function Logo() {
  return (
   <Link href="/" className="group inline-flex flex-col items-start">
      <div className="flex items-center space-x-2">
        {/* Línea vertical */}
        <span className="w-1 h-6 bg-primary rounded transition-all duration-300 group-hover:h-8" />
        <span className="text-2xl font-bold text-primary tracking-tight">
          NodeA
        </span>
      </div>
      <span className="text-sm text-secondary uppercase mt-1">
        soluciones digitales
      </span>
    </Link>)
}  
