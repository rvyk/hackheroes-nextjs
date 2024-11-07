"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { client } from "@/lib/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle,
  Loader2,
  School,
  User,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type UserType = "admin" | "user";
type FacilityData = {
  name?: string;
  description?: string;
};

const ToggleButton = ({
  icon: Icon,
  label,
  description,
  isActive,
  onClick,
}: any) => (
  <button
    onClick={onClick}
    className={`w-full rounded-lg p-4 transition-all duration-300 ${
      isActive
        ? "border-2 border-green-500 bg-green-100 shadow-md"
        : "border-2 border-gray-200 bg-white hover:border-green-300 hover:bg-green-50"
    }`}
  >
    <div className="flex items-start">
      <div
        className={`rounded-full p-2 ${isActive ? "bg-green-500" : "bg-gray-100"} mr-4`}
      >
        <Icon
          className={`h-6 w-6 ${isActive ? "text-white" : "text-green-600"}`}
        />
      </div>
      <div className="flex-grow text-left">
        <div
          className={`font-semibold ${isActive ? "text-green-700" : "text-gray-700"}`}
        >
          {label}
        </div>
        <div
          className={`mt-1 text-sm ${isActive ? "text-green-600" : "text-gray-500"}`}
        >
          {description}
        </div>
      </div>
      {isActive && (
        <div className="ml-2 flex-shrink-0">
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
      )}
    </div>
  </button>
);

const Page = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>("user");
  const [facilityData, setFacilityData] = useState<FacilityData>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = () => {
    setIsLoading(true);

    client.auth.createAccount
      .$post({
        type: userType,
        facilityData: {
          name: facilityData.name || "",
          description: facilityData.description || "",
        },
      })
      .then(async (res) => {
        const data = await res.json();
        if (data.isSynced) {
          router.push("/dashboard");
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleFacilityDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFacilityData({ ...facilityData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1) {
      if (userType === "admin") {
        setStep(2);
      } else if (userType === "user") {
        handleComplete();
      }
    } else if (step === 2) {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl font-bold text-green-800">
                <User className="mr-2 h-6 w-6 text-green-600" />
                Wybierz typ konta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleButton
                icon={Building2}
                label="Administrator placówki"
                description="Zarządzaj placówką i jej eko-inicjatywami"
                isActive={userType === "admin"}
                onClick={() => setUserType("admin")}
              />
              <ToggleButton
                icon={Users}
                label="Użytkownik aplikacji"
                description="Dołącz do eko-społeczności i podejmuj wyzwania"
                isActive={userType === "user"}
                onClick={() => setUserType("user")}
              />
            </CardContent>
          </div>
        );
      case 2:
        return (
          <div>
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl font-bold text-green-800">
                <School className="mr-2 h-6 w-6 text-green-600" />
                Dane placówki
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nazwa placówki</Label>
                <Input
                  id="name"
                  name="name"
                  value={facilityData.name}
                  onChange={handleFacilityDataChange}
                  placeholder="Np. Szkoła Podstawowa nr 1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Opis placówki</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={facilityData.description}
                  onChange={handleFacilityDataChange}
                  placeholder="Krótki opis Twojej placówki i jej eko-inicjatyw"
                  rows={4}
                />
              </div>
            </CardContent>
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-50 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-6 py-8">
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="h-16 w-16 text-green-600" />
              </motion.div>
              <p className="mt-4 font-semibold text-green-700">
                Trwa tworzenie Twojego konta...
              </p>
            </div>
            <p className="text-center text-green-600">
              Dziękujemy za cierpliwość. Przygotowujemy Twoje konto EcoQuest,
              abyś mógł rozpocząć swoją eko-przygodę.
            </p>
            <div className="rounded-lg bg-green-100 p-4">
              <p className="text-center italic text-green-800">
                Natura jest najlepszym nauczycielem życia w harmonii.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 p-4">
      <Card className="w-full max-w-md overflow-hidden">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
        <CardFooter className="mt-6 flex justify-between">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót
            </Button>
          )}
          <Button
            onClick={handleNext}
            className={`ml-auto flex items-center ${step === 1 && !userType ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={
              (step === 1 && !userType) ||
              (step === 2 && (!facilityData.name || !facilityData.description))
            }
          >
            {step === 2 ? "Załóż konto" : "Przejdź dalej"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
