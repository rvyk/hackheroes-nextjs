import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { HTTPException } from "hono/http-exception";
import { j } from "./__internals/j";

const authMiddleware = j.middleware(async ({ c, next }) => {
  const auth = await currentUser();

  if (!auth) {
    throw new HTTPException(401, { message: "Unauthorized" });
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
    include: {
      currentChallenge: {
        include: { category: true },
      },
      challengeHistory: true,
    },
  });

  if (!user) {
    throw new HTTPException(401, { message: "Unauthorized" });
  }

  return next({ user });
});

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const baseProcedure = j.procedure;
export const publicProcedure = baseProcedure;
export const privateProcedure = publicProcedure.use(authMiddleware);
