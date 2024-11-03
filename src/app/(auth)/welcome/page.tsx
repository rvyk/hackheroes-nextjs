"use client";

import { Heading } from "@/components/heading";
import { LoadingSpinner } from "@/components/loading-spinner";
import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

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
    if (data?.isSynced) router.push("/dashboard");
  }, [data, router]);

  return (
    <div className="flex w-full flex-1 items-center justify-center px-4">
      <div className="relative z-10 flex -translate-y-1/2 flex-col items-center gap-6 text-center">
        <LoadingSpinner size="md" />
        <Heading>Trwa tworzenie konta...</Heading>
        <p className="max-w-prose text-base/7 text-gray-600">
          Chwileczkę, przygotujemy wszystko dla ciebie.
        </p>
      </div>
    </div>
  );
};

export default Page;
