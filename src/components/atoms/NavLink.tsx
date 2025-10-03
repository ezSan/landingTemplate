// atoms/NavLink.tsx
import Link from "next/link"

interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm font-medium hover:text-primary transition-colors"
    >
      {label}
    </Link>
  )
}
