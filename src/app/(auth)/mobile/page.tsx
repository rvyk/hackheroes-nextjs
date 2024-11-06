import { auth } from "@clerk/nextjs/server";
import { redirect, RedirectType } from "next/navigation";

const Page = async () => {
  const { getToken } = await auth();
  return redirect(
    `hackheroes://auth/callback?token=${await getToken({ template: "mobile" })}`,
    RedirectType.replace,
  );
};

export default Page;
