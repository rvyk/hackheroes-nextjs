import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
import { router } from "../__internals/router";
import { publicProcedure } from "../procedures";

export const dynamic = "force-dynamic";

export const authRouter = router({
  createAccount: publicProcedure
    .input(
      z.object({
        type: z.enum(["admin", "user"]),
        facilityData: z
          .object({
            name: z.string(),
            description: z.string(),
          })
          .nullable(),
      }),
    )
    .mutation(async ({ c, ctx, input }) => {
      const auth = await currentUser();

      if (!auth) {
        return c.json({ isSynced: false });
      }

      const user = await db.user.findFirst({
        where: { externalId: auth.id },
      });

      if (!user) {
        await db.user.create({
          data: {
            externalId: auth.id,
            email: auth.emailAddresses[0].emailAddress,
            isAdmin: input.type === "admin",
            ...(input.type === "admin" && input.facilityData
              ? {
                  adminOrganization: {
                    create: {
                      name: input.facilityData.name,
                      description: input.facilityData.description,
                    },
                  },
                }
              : {}),
          },
        });
      }

      return c.json({ isSynced: true });
    }),
});
