import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "EcoQuest zmieniło moje podejście do ekologii. Teraz dbanie o środowisko to dla mnie codzienne wyzwanie i przyjemność!",
      author: "Anna K.",
    },
    {
      text: "Dzięki tej aplikacji nauczyłem się, jak małe zmiany mogą mieć duży wpływ na naszą planetę. Polecam każdemu!",
      author: "Piotr M.",
    },
    {
      text: "EcoQuest to nie tylko aplikacja, to społeczność ludzi, którzy chcą zmieniać świat na lepsze. Jestem dumna, że jestem jej częścią.",
      author: "Marta W.",
    },
  ];

  return (
    <section id="testimonials" className="bg-green-100 py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-800">
          Co mówią nasi użytkownicy
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="mb-4 italic">{`"${testimonial.text}"`}</p>
                <p className="font-semibold text-green-600">{`- ${testimonial.author}`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
