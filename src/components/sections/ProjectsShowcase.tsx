"use client";

import Image from "next/image";

const projects = [
  {
    title: "Landing Financiera",
    description: "Sitio web moderno para una empresa financiera con enfoque en generación de leads.",
    image:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Consultora de RRHH",
    description: "Landing elegante enfocada en recursos humanos, selección y coaching profesional.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Ecommerce de Seguridad",
    description: "Tienda online para venta de productos de seguridad industrial y vigilancia.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Ecommerce de Tecnología",
    description: "Plataforma moderna de venta de productos tecnológicos con integración a pasarelas de pago.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
  },
  {
    title: "Landing de Agencia Creativa",
    description: "Página para una agencia de marketing con foco en creatividad, innovación y resultados.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=60",
  },
];

export function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 px-6 bg-[rgb(var(--color-bg))]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Proyectos Realizados</h2>
        <p className="section-text text-lg text-[rgb(var(--color-muted))] max-w-3xl mx-auto mb-16">
          Algunos de nuestros desarrollos más recientes: desde landings corporativas hasta plataformas e-commerce completas.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[rgb(var(--color-card))] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--color-foreground))]">
                  {project.title}
                </h3>
                <p className="text-[rgb(var(--color-muted))] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
