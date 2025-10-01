"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // aquí integrarías API real; por ahora mock
    console.log({ name, email, msg });
    setSent(true);
    setName(""); setEmail(""); setMsg("");
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h3 className="text-xl font-semibold text-foreground">Contacto</h3>
        <p className="text-muted mt-2">Dejá tus datos y te contacto para planificar el proyecto.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Nombre" className="w-full border rounded-md p-3 bg-white dark:bg-gray-800" />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Email" className="w-full border rounded-md p-3 bg-white dark:bg-gray-800" />
          <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="Mensaje" rows={5} className="w-full border rounded-md p-3 bg-white dark:bg-gray-800" />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              style={{ backgroundColor: "rgb(var(--color-primary))", color: "rgb(var(--color-primary-foreground))" }}
              className="px-5 py-3 rounded-md font-medium"
            >
              Enviar mensaje
            </button>
            {sent && <span className="text-sm text-green-600">Mensaje enviado (mock)</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
