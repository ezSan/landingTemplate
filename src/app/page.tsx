// src/app/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import { ServicesAndPricing } from "@/components/sections/ServicesAndPricing";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Features />
        <About />
        <ServicesAndPricing />
        <ContactForm />
      </main>
    </>
  );
}
