"use client";

import Anchor from "@/app/_components/Anchor";

export default function Hero() {
  return (
    <main
      style={{
        background:
          "url('https://placehold.co/400x400/jpg?text=Hero+Image') no-repeat center/cover",
      }}
      className="h-[calc(100vh-74px)] flex flex-col justify-center items-center"
    >
      <Anchor
        next
        href="/pets"
        variant="primaryButton"
      >
        Adopt a pet
      </Anchor>
    </main>
  );
}
