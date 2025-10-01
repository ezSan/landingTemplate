// src/components/Features.tsx
export default function Features() {
  const items = [
    { title: "Responsive", desc: "Diseñado para verse perfecto en móviles y desktop." },
    { title: "Accesible", desc: "Semántica y contraste pensado para usabilidad." },
    { title: "Modular", desc: "Componentes reutilizables listos para escalar." },
    { title: "Deploy rápido", desc: "Integración con GitHub + Vercel para demo pública." },
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-foreground">Qué incluye</h2>
        <p className="mt-2 text-muted max-w-2xl">Estructura base pensada para entregar proyectos y adaptarlos fácilmente al branding del cliente.</p>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-lg border hover:shadow-md bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-muted text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
