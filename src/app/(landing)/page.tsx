"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { EcoQuestInAction } from "./_components/eco-quest-in-action";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { Testimonials } from "./_components/testimonials";
import { WhyEcoQuest } from "./_components/why-eco-quest";

export default function Page() {
  return (
    <section className="min-h-screen bg-green-50">
      <Navbar />
      <Hero />
      <WhyEcoQuest />
      <HowItWorks />
      <EcoQuestInAction />
      <Testimonials />

      <section className="bg-green-600 py-20 text-center text-white">
        <div className="container mx-auto">
          <h2 className="mb-4 text-4xl font-bold">
            Gotowy, by rozpocząć swoją eko-przygodę?
          </h2>
          <p className="mb-8 text-xl">
            Dołącz do EcoQuest już dziś i zacznij zmieniać świat!
          </p>
          <Button className="bg-white px-8 py-3 text-lg text-green-600 hover:bg-green-100">
            Zarejestruj się teraz
          </Button>
        </div>
      </section>

      <footer className="bg-green-800 py-8 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 EcoQuest. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </section>
  );
}
