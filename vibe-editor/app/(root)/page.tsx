"use client"; // ensures client-side for Button and Theme-aware features

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-start min-h-screen py-16 px-4 sm:px-8">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <Image 
          src="/hero.svg" 
          alt="Hero Section" 
          width={500} 
          height={500} 
          className="w-full max-w-md"
        />

        <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400">
          Vibe Code With Intelligence
        </h1>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-center text-gray-600 dark:text-gray-400 text-lg sm:text-xl mb-12 px-4 sm:px-0">
        VibeCode Editor is a powerful and intelligent code editor that enhances
        your coding experience with advanced features and seamless integration.
        It is designed to help you write, debug, and optimize your code efficiently.
      </p>

      {/* CTA Button */}
      <Link href="/dashboard" className="z-10">
        <Button
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white dark:bg-brand-primary dark:hover:bg-brand-secondary cursor-pointer"
          size="lg"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
}
