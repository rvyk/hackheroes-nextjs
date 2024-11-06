import { db } from "@/lib/db";
import { Challenge, ChallengeHistory } from "@prisma/client";

const getUserChallengeHistory = async (
  userId: string,
): Promise<ChallengeHistory[]> => {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { challengeHistory: true },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user.challengeHistory;
};

const getRandomChallenge = async (): Promise<Challenge> => {
  const challengesCount = await db.challenge.count();
  const skip = Math.floor(Math.random() * challengesCount);
  const challenge = await db.challenge.findFirst({
    skip,
  });
  if (!challenge) {
    throw new Error("No challenge found");
  }
  return challenge;
};

const getUserCurrentChallenge = async (userId: string): Promise<Challenge> => {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      currentChallenge: {
        include: { category: true },
      },
      challengeHistory: true,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const currentChallenge = user.currentChallenge;
  if (!currentChallenge) {
    let randomChallenge = await getRandomChallenge();

    while (
      user.challengeHistory.map((ch) => ch.id).includes(randomChallenge.id)
    ) {
      randomChallenge = await getRandomChallenge();
    }

    await db.user.update({
      where: { id: userId },
      data: {
        currentChallenge: {
          connect: {
            id: randomChallenge.id,
          },
        },
        currentChallengeDate: new Date(),
      },
    });
    return randomChallenge;
  }
  return currentChallenge;
};

export { getRandomChallenge, getUserChallengeHistory, getUserCurrentChallenge };
