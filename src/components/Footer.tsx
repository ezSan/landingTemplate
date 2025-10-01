// src/components/Footer.tsx
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import  Logo  from "./atoms/Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground mt-8">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}

        <Logo />


        {/* Nav links */}
        <nav className="flex gap-6 text-sm">
          <Link href="/politica" className="hover:text-primary transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-primary transition-colors">
            Términos
          </Link>
        </nav>

        {/* CTA */}
        <Button variant="primary">Hablemos</Button>
      </div>
      <div className="text-center text-muted text-xs py-4 border-t">
        © {new Date().getFullYear()} ezSanDev. Todos los derechos reservados.
      </div>
    </footer>
  );
}
