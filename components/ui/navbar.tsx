"use client";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4">
      <div className="flex justify-center items-center">
        <Image
          src="/logo.png" 
          alt="ADDVIA Logo"
          width={150}
          height={40}
          priority
        />
      </div>
    </header>
  );
};
