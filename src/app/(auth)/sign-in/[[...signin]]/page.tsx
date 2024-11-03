"use client";

import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center">
      <SignIn forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default Page;
