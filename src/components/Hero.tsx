import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Construyamos tu próxima <span className="text-primary">Web</span>
          </h1>
          <p className="text-lg text-muted mb-6">
            Desarrollo de sitios rápidos, económicos y adaptados a tu negocio.
            Desde landings simples hasta plataformas personalizadas.
          </p>
          <div className="flex gap-4">
            <Link href="/contacto">
              <Button variant="primary">Comenzar ahora</Button>
            </Link>
            <Link href="/servicios">
              <Button variant="outline">Ver servicios</Button>
            </Link>
          </div>
        </div>


        <div className="relative h-64 md:h-96">
          <Image
            src="/hero2.svg"
            alt="Ilustración hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}