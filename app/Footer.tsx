import Logo from "./Logo";
import Anchor from "@/app/_components/Anchor";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-4 px-3">
      <nav>
        <div className="flex mt-4 gap-8 items-start">
          <Anchor next href="/">
            <Logo width={100} />
          </Anchor>
          <ul>
            <li>
              <Anchor href="/pets">Pets</Anchor>
            </li>
            <li>
              <Anchor href="/shelters">Shelters</Anchor>
            </li>
            <li>
              <Anchor href="/rules">Rules</Anchor>
            </li>
            <li>
              <Anchor href="/impact">Impact</Anchor>
            </li>
          </ul>
        </div>
        <ul className="mt-4">
          <li>
            <Anchor
              href="https://www.instagram.com"
              aria-label="Adopt me! Inc. on Instagram"
              target="_blank"
            >
              <Image
                src="/instagram-white.svg"
                alt="Instagram logo"
                width={24}
                height={24}
              />
            </Anchor>
          </li>
        </ul>
      </nav>
      <p className="mt-4">&copy; {new Date().getFullYear()} Adopt me! Inc.</p>
    </footer>
  );
}
