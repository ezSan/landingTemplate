"use client";

import { ServiceCard } from "@/components/molecules/ServiceCard";
import { Code, Globe, Smartphone } from "lucide-react"; // Ejemplo de íconos

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios rápidos, seguros y optimizados para tu negocio.",
    icon: <Globe />,
  },
  {
    title: "Aplicaciones Mobile",
    description: "Apps nativas e híbridas para iOS y Android.",
    icon: <Smartphone />,
  },
  {
    title: "Integraciones y APIs",
    description: "Automatizá procesos y conectá tus sistemas.",
    icon: <Code />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[rgb(var(--background))]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 pd-85">Servicios</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
