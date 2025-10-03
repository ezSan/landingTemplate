"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { NavLink } from "@/components/atoms/NavLink";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Cerrar con ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Evitar scroll cuando el overlay está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {open && (
          /* Backdrop full-screen */
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="mobile-overlay fixed inset-0 z-50 flex items-center justify-center"
            // cerrar si clickeás el backdrop (no al click en el menú)
            onClick={(e) => {
              if (e.target === overlayRef.current) setOpen(false);
            }}
            style={{
              // usamos las variables CSS del theme
              backgroundColor: "rgba(var(--overlay), var(--overlay-alpha))",
            }}
          >
            {/* Panel con los links: grande, column */}
            <motion.nav
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-md mx-6 rounded-lg p-8 bg-[rgba(var(--card),1)] shadow-2xl"
              // evita que el click dentro cierre el overlay
              onClick={(e) => e.stopPropagation()}
              aria-label="Menú móvil"
            >
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      // si tu NavLink no acepta onClick, envuelvelo en <a> o manejar cierre desde el nav
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>

              {/* CTA abajo */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block w-full text-center rounded-md px-4 py-3 bg-primary text-primary-foreground"
                  onClick={() => setOpen(false)}
                  style={{
                    backgroundColor: "rgb(var(--color-primary))",
                    color: "rgb(var(--color-primary-foreground))",
                  }}
                >
                  Cotizar
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
