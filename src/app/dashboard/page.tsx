import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DailyEcoTask } from "./_components/daily-eco-task";
import { EcoLeaderboard } from "./_components/eco-leaderboard";
import { EcoTodoList } from "./_components/eco-todo-list";

const Page = async () => {
  const auth = await currentUser();

  if (!auth) {
    redirect("/sign-in");
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  });

  if (!user) {
    return redirect("/welcome");
  }

  const userDetails = [
    await db.user.findFirst({
      where: { email: user.email },
      include: { adminOrganization: true, participantOrganizations: true },
    }),
  ];

  if (user.isAdmin) {
    return (
      <main className="flex min-h-screen w-full bg-gray-50 p-16">
        <code>{JSON.stringify(userDetails, null, 2)}</code>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen w-full bg-gray-50 p-16">
      <section className="flex w-full gap-8">
        <EcoTodoList />
        <div className="grid h-fit w-full gap-8">
          <DailyEcoTask />
          <EcoLeaderboard />
        </div>
      </section>
    </main>
  );
};

export default Page;
