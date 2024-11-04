import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-40 text-center">
      <h1 className="mb-4 text-5xl font-bold text-green-800">
        Twórz lepszy świat, jeden krok na raz
      </h1>
      <p className="mb-8 text-xl text-green-600">
        Dołącz do EcoQuest i zacznij swoją przygodę z ekologicznym stylem życia!
      </p>
      <Button className="bg-green-600 px-8 py-3 text-lg text-white hover:bg-green-700">
        Rozpocznij za darmo
      </Button>
    </section>
  );
};
