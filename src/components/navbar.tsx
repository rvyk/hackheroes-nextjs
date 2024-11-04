import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { Leaf } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  user: User | null;
}

export const Navbar = ({ user }: NavbarProps) => {
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
          <div className="flex items-center gap-5">
            <SignOutButton>
              <Button
                variant="outline"
                className="bg-white text-green-600 hover:bg-green-100"
              >
                Wyloguj się
              </Button>
            </SignOutButton>

            <div className="h-8 w-px bg-green-200"></div>

            <Link href="/dashboard" className="hidden md:block">
              <Button
                variant="outline"
                className="bg-white text-green-600 hover:bg-green-100"
              >
                Przejdź do panelu
              </Button>
            </Link>
          </div>
        ) : (
          <Link href="/sign-in" className="hidden md:block">
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
