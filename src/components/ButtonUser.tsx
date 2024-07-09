"use client";

import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";

export const ButtonUser = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />˝
      </SignedOut>
    </>
  );
};
