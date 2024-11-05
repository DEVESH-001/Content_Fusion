import { BackgroundLines } from "@/components/ui/background-lines";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import HeroBottom from "@/app//dashboard/_components/HeroBottom";
import Header from "./dashboard/_components/Header";

export default function Page() {
  return (
    <div>

      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white to-neutral-500 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-10 font-bold tracking-tight">
          <Link href="/" className="hover:underline">
            Content Fusion
          </Link>
          <br />
          <a
            href="https://www.linkedin.com/in/deveshyadav1/"
            className="hover:animate-pulse hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devesh Yadav
          </a>
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-300 dark:text-neutral-400 text-center">
          Everything you need in One App. <br />
          ContentFusion is the all-in-one AI platform built to transform how you
          create, manage, and scale your marketing—without the headaches.
        </p>
        <Link href="/dashboard">
          <button className="text-white flex items-center justify-center mt-10 cursor-pointer bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded relative z-20">
            Go to Dashboard <ArrowRight className="ml-2" />
          </button>
        </Link>
      </BackgroundLines>
      <HeroBottom />
    </div>
  );
}
