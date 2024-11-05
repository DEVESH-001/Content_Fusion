"use client";
import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { History, Home, LogOut } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconUserCircle } from "@tabler/icons-react";

export default function SideNavTwo() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <Home className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    
    {
      label: "Owner",
      href: "https://www.linkedin.com/in/deveshyadav1/",
      icon: (
        <IconUserCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
 
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full h-screen border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      )}
    >
      <Sidebar open={true} className="h-screen">
        {" "}
        {/* Set height to 100vh */}
        <SidebarBody className="justify-between gap-10 h-full">
          {" "}
          {/* Use h-full to fill parent height */}
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div></div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <span className="font-medium text-black dark:text-white whitespace-pre">
        ContentFusion
      </span>
    </Link>
  );
};
