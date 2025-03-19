import Anchor from "@/app/_components/Anchor";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 bg-purple-700 text-white fixed w-full top-0 left-0 z-10">
      <Anchor href="/" next>
        <Logo width={100} />
      </Anchor>
      <Navigation />
    </header>
  );
}
