"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { SignUp as ClerkSignUp } from "@clerk/nextjs";
import HeroBottom from "@/app/dashboard/_components/HeroBottom";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <BackgroundBeams />
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-950 antialiased">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4">
          <h1 className="relative z-10 text-2xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-10">
            Join ContextFusion
          </h1>
          {/* Center the ClerkSignUp component */}
          <div className="w-full flex justify-center mb-10">
            <ClerkSignUp />
          </div>
        </div>
        <Link
          className="text-white text-lg hover:underline z-20 animate-pulse "
          href="https://www.linkedin.com/in/deveshyadav1/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Contact the Developer
        </Link>

        <HeroBottom />
      </div>
    </>
  );
}
