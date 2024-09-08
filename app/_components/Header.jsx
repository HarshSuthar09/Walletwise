"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  
  return (
    <header className="p-4 md:p-6 lg:p-8 flex justify-between items-center bg-white shadow-lg border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="logo" width={60} height={25} />
        <span className="font-bold text-2xl md:text-3xl text-blue-700">Wallet Wise</span>
      </div>

      <nav className="flex items-center space-x-4">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="flex space-x-4">
            <Link href="/dashboard">
              <Button 
                variant="outline" 
                className="rounded-full border-gray-500 text-gray-700 hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button 
                className="rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
