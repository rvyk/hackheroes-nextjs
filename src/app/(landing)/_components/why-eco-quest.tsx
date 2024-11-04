import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BarChart, Leaf, Users } from "lucide-react";

export const WhyEcoQuest = () => {
  const cards = [
    {
      title: "Społeczność",
      description:
        "Dołącz do tysięcy osób, które wspólnie dbają o naszą planetę.",
      icon: Users,
    },
    {
      title: "Nagrody",
      description:
        "Zdobywaj punkty i odblokowuj ekscytujące nagrody za swoje eko-działania.",
      icon: Award,
    },
    {
      title: "Śledzenie postępów",
      description:
        "Monitoruj swój wpływ na środowisko i obserwuj, jak rośnie z czasem.",
      icon: BarChart,
    },
    {
      title: "Edukacja",
      description:
        "Ucz się o ekologii i zrównoważonym rozwoju poprzez codzienne wyzwania.",
      icon: Leaf,
    },
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-800">
          Dlaczego EcoQuest?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  {card.icon && <card.icon className="mr-2 h-6 w-6" />}
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
