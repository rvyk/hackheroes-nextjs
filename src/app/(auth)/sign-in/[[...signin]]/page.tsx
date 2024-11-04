"use client";

import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center bg-gray-50">
      <SignIn
        forceRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/sign-up"
        signUpUrl="/sign-up"
        signUpFallbackRedirectUrl="/sign-up"
      />
    </div>
  );
};

export default Page;
