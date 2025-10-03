import { NavLink } from "../atoms/NavLink";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
]

export function NavMenu() {
  return (
    <nav className="hidden md:flex gap-6">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  )
}
