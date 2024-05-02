"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[50] fixed  top-0 w-full  backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">
            <Link href="/">Quoc Viet</Link>
          </span>
          <div className="flex space-x-4 text-gray-900">
            <Button
              onClick={() => {
                window.fullpage_api.moveTo(2);
              }}
              variant={"ghost"}
            >
              About
            </Button>
            <Button variant={"ghost"}>
              <Link href={"/projects"}>Project</Link>
            </Button>
            <Button
              onClick={() => {
                window.fullpage_api.moveTo(3);
              }}
              variant={"ghost"}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
