"use client";

import Button from "@/app/_components/Button";

export default function Hero() {
  return (
    <section
      style={{
        background:
          "url('https://placehold.co/400x400/jpg?text=Hero+Image') no-repeat center/cover",
      }}
      className="h-[calc(100vh-74px)] flex flex-col justify-center items-center"
    >
      <Button
        onClick={() => {
          window.history.pushState(null, "", "#adopt-one");
          window.scrollTo({
            top: 2 * (window.innerHeight - 74),
            behavior: "smooth",
          });
        }}
        variant="primary"
      >
        Adopt a pet
      </Button>
    </section>
  );
}
