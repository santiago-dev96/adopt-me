import Navigation from "./Navigation";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-purple-700 text-white">
      <Image
        src="https://placehold.co/100x50/png?text=App+Logo"
        width={100}
        height={50}
        alt="Adopt Me!"
      />

      <Navigation />
    </header>
  );
}
