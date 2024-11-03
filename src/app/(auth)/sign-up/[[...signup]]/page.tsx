"use client";

import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center">
      <SignUp fallbackRedirectUrl="/welcome" forceRedirectUrl="/welcome" />
    </div>
  );
};

export default Page;