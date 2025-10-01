import Link from "next/link"

interface NavLinkProps {
  href: string
  label: string
}

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {label}
    </Link>
  )
}   
