import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { Leaf } from "lucide-react";
import Link from "next/link";

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8" />
          <span className="text-2xl font-bold">EcoQuest</span>
        </Link>
        <div className="hidden space-x-4 md:flex">
          <Link href="#features" className="hover:text-green-200">
            Funkcje
          </Link>
          <Link href="#how-it-works" className="hover:text-green-200">
            Jak to działa
          </Link>
          <Link href="#testimonials" className="hover:text-green-200">
            Opinie
          </Link>
        </div>
        {user ? (
          <Link href="/dashboard" className="hidden md:block">
            <Button
              variant="outline"
              className="bg-white text-green-600 hover:bg-green-100"
            >
              Przejdź do panelu
            </Button>
          </Link>
        ) : (
          <Link href="/signin" className="hidden md:block">
            <Button
              variant="outline"
              className="bg-white text-green-600 hover:bg-green-100"
            >
              Zaloguj się
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
