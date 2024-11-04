import { router } from "../__internals/router";
import { privateProcedure } from "../procedures";

export const dynamic = "force-dynamic";

export const mobileRouter = router({
  getUser: privateProcedure.query(async ({ c, ctx }) => {
    return c.json({ user: ctx.user });
  }),
});
