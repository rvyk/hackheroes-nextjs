"use client";

import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center bg-gray-50">
      <SignUp
        fallbackRedirectUrl="/welcome"
        forceRedirectUrl="/welcome"
        signInUrl="/sign-in"
        signInFallbackRedirectUrl="/sign-in"
      />
    </div>
  );
};

export default Page;
