"use client";
import React from "react";
import StickyScroll from "@/components/ui/sticky-scroll-reveal"; // Ensure this path is correct
import Image from "next/image";

const content = [
  {
    title: "AI-Powered Blog Writing",
    description:
      "Generate high-quality blog posts effortlessly with our AI assistance. Simply input your topic, and let our intelligent system craft engaging content tailored to your audience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Content creation demo"
        />
      </div>
    ),
  },
  {
    title: "Code Writing Assistance",
    description:
      "Need help with coding? Our AI can write code snippets for you, making programming more efficient and less time-consuming.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Content creation demo"
        />
      </div>
    ),
  },
  {
    title: "Content Creation Made Easy",
    description:
      "Transform your ideas into well-written content with our AI tools. Whether you need articles, website copy, or marketing materials, we’ve got you covered.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1553174860-4d50ed11df03?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Content creation demo"
        />
      </div>
    ),
  },
  {
    title: "YouTube Description Generator",
    description:
      "Enhance your video content with optimized descriptions. Our AI generates compelling YouTube descriptions that capture attention and boost your SEO.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1541877944-ac82a091518a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Content creation demo"
        />
      </div>
    ),
  },

  {
    title: "Error Detection in Code",
    description:
      "Quickly identify and fix errors in your code with our AI-powered error detection tool. Improve your coding efficiency and reduce debugging time.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Content creation demo"
        />
      </div>
    ),
  },
  {
    title: "Plagiarism-Free Content",
    description:
      "Ensure originality in your writing with our AI's plagiarism-checking feature. Generate content that is unique and tailored to your needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Content creation demo"
        />
      </div>
    ),
  },
];

export default function HeroBottom() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
