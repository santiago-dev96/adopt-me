import Image from "next/image";
import Anchor from "@/app/_components/Anchor";

export default function SeeOurPets() {
  return (
    <section
      aria-label="See Our Pets"
      className="flex flex-col items-center gap-6 mt-5 px-5 pb-10"
    >
      <h2 className="text-3xl text-center">
        Give them a home
      </h2>
      <Image
        src="https://placehold.co/300x350/png?text=Pets+Image"
        width={300}
        height={350}
        alt="Pets"
      />
      <Anchor next href="/pets" variant="primaryButton">Adopt one</Anchor>
    </section>
  );
}
