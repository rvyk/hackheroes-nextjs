"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QUOTES } from "@/config";
import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { Leaf } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const [randomQuote, setRandomQuote] = useState("");
  const isMobile = searchParams["mobile"] === "true";

  useEffect(() => {
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setRandomQuote(quote);
  }, []);

  const { data } = useQuery({
    queryFn: async () => {
      const res = await client.auth.getDatabaseSyncStatus.$get();
      return await res.json();
    },
    queryKey: ["get-database-sync-status"],
    refetchInterval: (query) => {
      return query.state.data?.isSynced ? false : 1000;
    },
  });

  useEffect(() => {
    if (data?.isSynced) router.push(isMobile ? "/mobile" : "/dashboard");
  }, [data, router, isMobile]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="mx-auto rounded-lg bg-green-50 p-6 shadow-lg">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl font-bold text-green-800">
              <Leaf className="mr-2 h-6 w-6 text-green-600" />
              Tworzenie konta EcoQuest
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
              <p className="mt-4 font-semibold text-green-700">
                Trwa tworzenie Twojego konta...
              </p>
            </div>

            <p className="text-center text-green-600">
              Dziękujemy za dołączenie do społeczności EcoQuest! Przygotowujemy
              Twoje konto, abyś mógł rozpocząć swoją eko-przygodę. To zajmie
              tylko chwilę.
            </p>

            {randomQuote && (
              <div className="rounded-lg bg-green-100 p-4">
                <p className="text-center italic text-green-800">
                  &quot;{randomQuote}&quot;
                </p>
              </div>
            )}

            <p className="text-center text-sm text-green-500">
              Tworząc konto, przyczyniasz się do budowania bardziej
              zrównoważonej przyszłości. Dziękujemy za Twoje zaangażowanie!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
