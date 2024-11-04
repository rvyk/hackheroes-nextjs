import { Recycle } from "lucide-react";
import Image from "next/image";

export const EcoQuestInAction = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold text-green-800">
          Zobacz EcoQuest w akcji
        </h2>
        <div className="relative inline-block">
          <Image
            src="/placeholder.svg?height=600&width=300"
            alt="EcoQuest App Screenshot"
            width={300}
            height={600}
            className="rounded-xl shadow-2xl"
          />
          <div className="absolute -bottom-4 -right-4 rounded-full bg-green-500 p-4 text-white">
            <Recycle className="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>
  );
};
