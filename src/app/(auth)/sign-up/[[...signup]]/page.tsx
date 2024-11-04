"use client";

import { SignUp } from "@clerk/nextjs";

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const isMobile = searchParams["mobile"] === "true";

  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center bg-gray-50">
      <SignUp
        fallbackRedirectUrl={`/welcome?mobile=${isMobile}`}
        forceRedirectUrl={`/welcome?mobile=${isMobile}`}
        signInUrl="/sign-in"
        signInFallbackRedirectUrl="/sign-in"
      />
    </div>
  );
};

export default Page;
