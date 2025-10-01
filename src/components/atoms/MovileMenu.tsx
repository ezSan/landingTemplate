"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { NavLink } from "./NavLinks"
const navLinks = [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
]

export function MobileMenu() {
    const [open, setOpen] = useState(false)

    return (
        <div className="md:hidden">
            <Button

                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {open && (
                <div className="absolute top-14 right-4 bg-background border rounded-lg shadow-md p-4 space-y-3">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href} label={link.label} />
                    ))}
                </div>
            )}
        </div>
    )
}
