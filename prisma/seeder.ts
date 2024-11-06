import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.challenge.deleteMany();
    console.log("Deleted all challenges");
  } catch (error) {
    console.log("Error deleting challenges");
    console.error(error);
  }

  try {
    await prisma.challengeCategory.deleteMany();
    console.log("Deleted all challenge categories");
  } catch (error) {
    console.log("Error deleting challenge categories");
    console.error(error);
  }

  const categories = [
    { id: "WASTE_REDUCTION", name: "Ograniczenie Odpadów" },
    { id: "RECYCLING_AND_REUSE", name: "Recykling i Ponowne Użycie" },
    { id: "ENERGY_CONSERVATION", name: "Oszczędzanie Energii" },
    { id: "WATER_CONSERVATION", name: "Oszczędzanie Wody" },
    { id: "SUSTAINABLE_TRANSPORTATION", name: "Zrównoważony Transport" },
    {
      id: "NATURE_PROTECTION_AND_BIODIVERSITY",
      name: "Ochrona Przyrody i Bioróżnorodności",
    },
    { id: "SUSTAINABLE_FOOD_CHOICES", name: "Zrównoważone Wybory Żywności" },
    { id: "PLASTIC_REDUCTION", name: "Ograniczenie Plastiku" },
    { id: "UPCYCLING_AND_DIY_PROJECTS", name: "Upcykling i Projekty DIY" },
    {
      id: "COMMUNITY_AND_ENVIRONMENTAL_AWARENESS",
      name: "Świadomość Społeczna i Ekologiczna",
    },
  ];

  try {
    await prisma.challengeCategory.createMany({
      data: categories,
    });
    console.log(`Created ${categories.length} challenge categories`);
  } catch (error) {
    console.log("Error creating categories");
    console.error(error);
  }

  const challenges = [
    {
      title: "Butelka Wielokrotnego Użytku",
      description:
        "Zrób zdjęcie, jak używasz butelki wielokrotnego użytku zamiast plastikowej.",
      points: 10,
      challengeCategoryId: "PLASTIC_REDUCTION",
    },
    {
      title: "Pudełko na Drugie Śniadanie",
      description:
        "Udokumentuj, jak przynosisz jedzenie do szkoły/pracy w pojemniku wielokrotnego użytku.",
      points: 10,
      challengeCategoryId: "PLASTIC_REDUCTION",
    },
    {
      title: "Kompaktowanie Plastików",
      description:
        "Pokaż, jak kompresujesz plastikowe odpady w jednym miejscu, gotowe do recyklingu.",
      points: 12,
      challengeCategoryId: "RECYCLING_AND_REUSE",
    },
    {
      title: "Wyłączenie Świateł",
      description: "Zrób zdjęcie wyłączonego światła w pustym pomieszczeniu.",
      points: 8,
      challengeCategoryId: "ENERGY_CONSERVATION",
    },
    {
      title: "Zakręcenie Kranika",
      description:
        "Udokumentuj zakręcenie kranika w łazience lub kuchni po użyciu.",
      points: 10,
      challengeCategoryId: "WATER_CONSERVATION",
    },
    {
      title: "Rowerem do Szkoły",
      description:
        "Zrób zdjęcie siebie przy rowerze w drodze do szkoły lub pracy.",
      points: 15,
      challengeCategoryId: "SUSTAINABLE_TRANSPORTATION",
    },
    {
      title: "Posadzone Drzewo lub Krzak",
      description: "Udokumentuj swoje działanie sadząc małe drzewko lub krzew.",
      points: 20,
      challengeCategoryId: "NATURE_PROTECTION_AND_BIODIVERSITY",
    },
    {
      title: "Zakup Lokalnych Warzyw",
      description: "Zrób zdjęcie zakupionych lokalnych warzyw, np. na targu.",
      points: 12,
      challengeCategoryId: "SUSTAINABLE_FOOD_CHOICES",
    },
    {
      title: "Sprzątanie w Parku",
      description:
        "Pokaż worek śmieci zebrany podczas sprzątania w okolicy lub parku.",
      points: 20,
      challengeCategoryId: "COMMUNITY_AND_ENVIRONMENTAL_AWARENESS",
    },
    {
      title: "Zredukowanie Odpadu - Kubek Wielorazowy",
      description:
        "Udokumentuj, jak korzystasz z kubka wielorazowego do napojów.",
      points: 10,
      challengeCategoryId: "WASTE_REDUCTION",
    },
    {
      title: "Upcyklingowany Przedmiot",
      description:
        "Pokaż zdjęcie nowego zastosowania dla starego przedmiotu, np. słoika przerobionego na pojemnik.",
      points: 15,
      challengeCategoryId: "UPCYCLING_AND_DIY_PROJECTS",
    },
    {
      title: "Zastosowanie Woreczka Materiałowego",
      description:
        "Udokumentuj, jak korzystasz z woreczka materiałowego na zakupy zamiast folii.",
      points: 10,
      challengeCategoryId: "PLASTIC_REDUCTION",
    },
    {
      title: "Dbanie o Roślinę",
      description: "Zrób zdjęcie podlewanej przez siebie rośliny.",
      points: 8,
      challengeCategoryId: "NATURE_PROTECTION_AND_BIODIVERSITY",
    },
    {
      title: "Rowerowa Przejażdżka po Okolicy",
      description:
        "Udokumentuj swoją rowerową przejażdżkę w miejsce publiczne.",
      points: 15,
      challengeCategoryId: "SUSTAINABLE_TRANSPORTATION",
    },
    {
      title: "Powtórne Użycie Torby",
      description: "Pokaż zdjęcie torby, którą wielokrotnie używasz na zakupy.",
      points: 10,
      challengeCategoryId: "WASTE_REDUCTION",
    },
    {
      title: "Samodzielnie Zrobiony Lunch",
      description:
        "Zrób zdjęcie przygotowanego przez siebie lunchu z pojemnikami wielorazowego użytku.",
      points: 12,
      challengeCategoryId: "SUSTAINABLE_FOOD_CHOICES",
    },
    {
      title: "Zero Plastikowych Słomek",
      description:
        "Pokaż, że używasz metalowej lub bambusowej słomki zamiast plastikowej.",
      points: 10,
      challengeCategoryId: "PLASTIC_REDUCTION",
    },
    {
      title: "Powrót do Użycia Starej Torby",
      description:
        "Udokumentuj, że przynosisz torbę wielokrotnego użytku na zakupy.",
      points: 8,
      challengeCategoryId: "RECYCLING_AND_REUSE",
    },
    {
      title: "DIY Organizer z Pudełka",
      description:
        "Pokaż stworzony przez siebie organizer z recyklingowanego pudełka.",
      points: 12,
      challengeCategoryId: "UPCYCLING_AND_DIY_PROJECTS",
    },
    {
      title: "Picie Wody z Kranu",
      description:
        "Zrób zdjęcie, jak pijesz wodę bezpośrednio z kranu lub butelki z filtrem.",
      points: 10,
      challengeCategoryId: "WATER_CONSERVATION",
    },
  ];

  try {
    await prisma.challenge.createMany({
      data: challenges,
    });
    console.log(`Created ${challenges.length} challenges`);
  } catch (error) {
    console.log("Error creating challenges");
    console.error(error);
  }

  console.log("Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
