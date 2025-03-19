"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

function NavLinks(props: { children: ReactNode }) {
  return (
    <ul className="flex flex-col items-start">
      {props.children}
    </ul>
  );
}

function NavLink(props: { children: ReactNode; href: string }) {
  return (
    <li
      className="py-1 pl-2 pr-4 first:pt-2 last:pb-2"
      onClick={(e) => e.stopPropagation()}
    >
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  return (
    <button
      className="relative cursor-pointer"
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
      }}
    >
      <Image src="/menu-white.svg" width={32} height={32} alt="Menu" />

      <div
        className="absolute z-20 top-full mt-1 overflow-hidden right-0 bg-stone-50 text-stone-900 border-stone-400 border"
        style={{
          display: isMenuOpen ? "block" : "none",
        }}
      >
        <nav>
          <NavLinks>
            <NavLink href="/register">Register</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/pets">Pets</NavLink>
            <NavLink href="/shelters">Shelters</NavLink>
            <NavLink href="/rules">Rules</NavLink>
            <NavLink href="/impact">Impact</NavLink>
          </NavLinks>
        </nav>
      </div>
    </button>
  );
}
