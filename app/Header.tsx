"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-purple-700 text-white">
      <Image
        src="https://placehold.co/100x50/png?text=App+Logo"
        width={100}
        height={50}
        alt="Adopt Me!"
      />

      <button>
        <Image src="/menu-white.svg" width={32} height={32} alt="Menu" />
      </button>

      <div className="fixed h-0 w-dvw overflow-hidden">
        <nav className="flex gap-4">
          <Link href="/">Pets</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/impact">Impact</Link>
        </nav>

        <nav className="flex gap-4">
          <Link href="/register">Register</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
