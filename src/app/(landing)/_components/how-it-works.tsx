import { cn } from "@/lib/utils";
import { Droplet, Sun, Wind } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "1. Wybierz wyzwanie",
      description:
        "Codziennie otrzymuj nowe eko-wyzwania dostosowane do Twoich możliwości.",
      icon: Sun,
      iconColor: "text-yellow-500",
    },
    {
      title: "2. Podejmij działanie",
      description:
        "Wykonuj zadania i dokumentuj swoje eko-działania w aplikacji.",
      icon: Wind,
      iconColor: "text-blue-500",
    },
    {
      title: "3. Zbieraj nagrody",
      description:
        "Zdobywaj punkty, odznaki i nagrody za swoje zaangażowanie w ochronę środowiska.",
      icon: Droplet,
      iconColor: "text-blue-700",
    },
  ];

  return (
    <section id="how-it-works" className="bg-green-100 py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-800">
          Jak to działa?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block rounded-full bg-white p-6">
                <step.icon className={cn("h-12 w-12", step.iconColor)} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-green-700">
                {step.title}
              </h3>
              <p className="text-green-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
