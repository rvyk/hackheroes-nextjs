"use client";

import { SignIn } from "@clerk/nextjs";

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const isMobile = searchParams["mobile"] === "true";
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center bg-gray-50">
      <SignIn
        forceRedirectUrl={isMobile ? "/mobile" : "/dashboard"}
        signUpForceRedirectUrl="/sign-up"
        signUpUrl="/sign-up"
        signUpFallbackRedirectUrl="/sign-up"
      />
    </div>
  );
};

export default Page;
