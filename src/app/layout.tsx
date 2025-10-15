import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProviderClient } from "@/context/ThemeContext";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "NodeA | Soluciones Digitales",
  description: "Desarrollo de sitios web rápidos, modernos y personalizados.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-bg text-foreground">
        <ThemeProviderClient>
          <Header />
          <main className="flex-1 container mx-auto px-4 md:px-6 py-6">{children}</main>
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  );
}
