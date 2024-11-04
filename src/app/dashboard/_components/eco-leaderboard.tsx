"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Gift, Leaf, School, Trophy, Users } from "lucide-react";
import { useState } from "react";

interface Participant {
  name: string;
  points: number;
  class: string;
}

interface Reward {
  points: number;
  description: string;
}

interface Organization {
  name: string;
  description: string;
}

export const EcoLeaderboard = () => {
  const [userOrganization, setUserOrganization] = useState<Organization | null>(
    null,
  );
  const [participants, setParticipants] = useState<Participant[]>([
    { name: "Anna Kowalska", points: 250, class: "3A" },
    { name: "Jan Nowak", points: 220, class: "3B" },
    { name: "Maria Wiśniewska", points: 200, class: "3A" },
    { name: "Piotr Zieliński", points: 180, class: "3C" },
    { name: "Ewa Dąbrowska", points: 170, class: "3B" },
  ]);

  const [rewards, setRewards] = useState<Reward[]>([
    {
      points: 100,
      description: "Eko-długopis wykonany z materiałów recyklingowych",
    },
    { points: 200, description: "Butelka na wodę wielokrotnego użytku" },
    { points: 300, description: "Sadzonka drzewa do posadzenia w ogrodzie" },
    { points: 500, description: "Wycieczka do lokalnego parku narodowego" },
  ]);

  return (
    <div className="mx-auto w-full rounded-lg bg-green-50 p-6 shadow-lg">
      {userOrganization ? (
        <>
          <h1 className="mb-6 flex items-center text-3xl font-bold text-green-800">
            <School className="mr-2 h-8 w-8" />
            {userOrganization.name}
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Trophy className="mr-2 h-5 w-5" />
                  Tabela Wyników
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Miejsce</TableHead>
                      <TableHead>Imię i Nazwisko</TableHead>
                      <TableHead>Klasa</TableHead>
                      <TableHead>Punkty</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {participants
                      .sort((a, b) => b.points - a.points)
                      .map((participant, index) => (
                        <TableRow key={participant.name}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{participant.name}</TableCell>
                          <TableCell>{participant.class}</TableCell>
                          <TableCell>{participant.points}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Gift className="mr-2 h-5 w-5" />
                  Nagrody
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {rewards.map((reward) => (
                    <li key={reward.points} className="flex items-start">
                      <Badge variant="secondary" className="mr-2 mt-1">
                        {reward.points} pkt
                      </Badge>
                      <span>{reward.description}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Users className="mr-2 h-5 w-5" />O Naszej Organizacji
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800">{userOrganization.description}</p>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <Leaf className="mr-2 h-6 w-6" />
              Witaj w Eko-Społeczności!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-green-800">
              Świetnie, że jesteś z nami! Choć nie jesteś jeszcze przypisany do
              żadnej organizacji, możesz już zacząć swoją eko-przygodę. Każde
              Twoje działanie na rzecz środowiska się liczy!
            </p>
            <p className="mb-4 text-green-800">
              Zbieraj punkty za swoje eko-działania, takie jak segregacja
              odpadów, oszczędzanie wody i energii, czy używanie przyjaznych dla
              środowiska środków transportu. Im więcej punktów zdobędziesz, tym
              większy będzie Twój wkład w ochronę naszej planety!
            </p>
            <p className="mb-6 text-green-800">
              Dołącz do organizacji, aby rywalizować z innymi i zdobywać nagrody
              za swoje wysiłki!
            </p>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Znajdź organizację
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
