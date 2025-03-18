"use client";

import PetCard from "./PetCard";
import PetCards from "./PetCards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function LatestAdoptions() {
  gsap.registerPlugin(useGSAP);
  const cardA = useRef<HTMLLIElement>(null);
  const cardB = useRef<HTMLLIElement>(null);
  const cardC = useRef<HTMLLIElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cardA.current, { duration: 9, x: "100vw", ease: "none" });
    tl.to(cardA.current, { duration: 9, x: "200vw", ease: "none" });
    tl.to(cardA.current, { duration: 9, x: "300vw", ease: "none" });
    tl.to(cardA.current, { duration: 0, x: 0, ease: "none" });
  }, { scope: cardA });

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cardB.current, { duration: 9, x: "100vw", ease: "none" });
    tl.to(cardB.current, { duration: 9, x: "200vw", ease: "none" });
    tl.to(cardB.current, { duration: 0, x: "-100vw", ease: "none" });
    tl.to(cardB.current, { duration: 9, x: 0, ease: "none" });
  }, { scope: cardB });

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(cardC.current, { duration: 9, x: "100vw", ease: "none" });
    tl.to(cardC.current, { duration: 0, x: "-200vw", ease: "none" });
    tl.to(cardC.current, { duration: 9, x: "-100vw", ease: "none" });
    tl.to(cardC.current, { duration: 9, x: 0, ease: "none" });
  }, { scope: cardC });

  return (
    <section className="py-10 overflow-hidden w-full">
      <PetCards
        style={{ width: "300vw", transform: "translateX(-100vw)" }}
      >
        <PetCard ref={cardA} width={200} />
        <PetCard ref={cardB} width={200} />
        <PetCard ref={cardC} width={200} />
      </PetCards>
    </section>
  );
}
