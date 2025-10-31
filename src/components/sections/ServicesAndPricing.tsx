"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { Code, Globe, Smartphone } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios modernos, rápidos y optimizados para destacar tu presencia online.",
    icon: <Globe />,
  },
  {
    title: "Aplicaciones Mobile",
    description: "Apps nativas e híbridas para iOS y Android, con rendimiento y experiencia impecables.",
    icon: <Smartphone />,
  },
  {
    title: "Integraciones y APIs",
    description: "Automatizá procesos y conectá tus plataformas con integraciones seguras.",
    icon: <Code />,
  },
];

const plans = [
  {
    name: "Inicial",
    price: "u$100",
    features: [
      "Landing page profesional (1 sección principal + contacto)",
      "Diseño adaptable (responsive) para todos los dispositivos",
      "Optimización básica de velocidad y SEO",
      "Formulario de contacto funcional",
      "Integración con redes sociales",
      "Soporte y mantenimiento por 30 días",
    ],
  },
  {
    name: "Profesional",
    price: "u$250",
    features: [
      "Sitio web completo de hasta 5 secciones (Inicio, Servicios, Contacto, etc.)",
      "Diseño personalizado con enfoque en conversión",
      "Integración con APIs, bases de datos o Firestore",
      "Optimización SEO avanzada (estructura + metadatos)",
      "Panel de administración básico (opcional)",
      "Soporte técnico y ajustes durante 60 días",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "A medida",
    features: [
      "Sistema web o e-commerce personalizado",
      "Dashboard administrativo completo",
      "Integración avanzada con plataformas externas (pagos, CRM, etc.)",
      "Hosting, dominio y mantenimiento opcional",
      "Soporte técnico dedicado y evolución continua",
    ],
  },
];

export function ServicesAndPricing() {
  return (
    <section className="py-28 px-6 bg-[rgb(var(--color-bg))] text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* -------- SERVICIOS -------- */}
        <h2 className="text-4xl font-bold mb-4">Servicios</h2>
        <p className="section-text text-lg text-[rgb(var(--color-muted))] w-4/5 mx-auto mb-20 text-center leading-relaxed">
          Soluciones digitales completas para potenciar tu marca o negocio.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-28 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="bg-[rgb(var(--color-card))] border border-[rgba(var(--color-foreground),0.08)] hover:shadow-xl transition-all"
              />
            </motion.div>
          ))}
        </div>

        {/* Separador visual */}
        <div className="relative my-20">
          <hr className="border-t border-[rgba(var(--color-foreground),0.1)]" />
          <span className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[rgb(var(--color-bg))] px-4 text-sm text-[rgb(var(--color-muted))]">
            PLANES DISPONIBLES
          </span>
        </div>

        {/* -------- PLANES Y PRECIOS -------- */}
        <h3 className="text-4xl font-bold mb-4">Planes y precios</h3>
        <p className="section-text text-lg text-[rgb(var(--color-muted))] w-4/5 mx-auto mb-20 text-center leading-relaxed">
          Elegí el plan que mejor se adapte a tus objetivos o pedí una propuesta personalizada.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={plan.highlighted ? { scale: 1.04 } : { scale: 1.02 }}
              className={`relative rounded-2xl border p-8 shadow-md transition-all ${plan.highlighted
                ? "border-[rgb(var(--color-primary))] shadow-lg bg-[rgba(var(--color-primary),0.05)]"
                : "border-[rgba(var(--color-foreground),0.1)] bg-[rgb(var(--color-card))]"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  MÁS POPULAR
                </div>
              )}

              <h4 className="text-2xl font-semibold mb-4">{plan.name}</h4>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-2 mb-8 text-[rgb(var(--color-muted))] text-left mx-auto max-w-[240px]">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <button
                className="btn-primary w-full font-medium"
                style={{
                  backgroundColor: plan.highlighted
                    ? "rgb(var(--color-primary))"
                    : "rgba(var(--color-primary),0.9)",
                  color: "rgb(var(--color-primary-foreground))",
                }}
              >
                Seleccionar
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <p className="text-lg text-[rgb(var(--color-muted))] mb-6">
            ¿Tenés una idea o proyecto en mente? 🚀
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full font-medium transition-colors"
            style={{
              backgroundColor: "rgb(var(--color-primary))",
              color: "rgb(var(--color-primary-foreground))",
            }}
          >
            Hablemos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
