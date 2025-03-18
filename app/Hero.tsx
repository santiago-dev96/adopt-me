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
      <h1 className="text-4xl text-center text-stone-900">
        Adopt me!
      </h1>

      <div className="flex gap-3 mt-6">
        <Button
          onClick={() => {
            window.history.pushState(null, "", "#latest-adoptions");
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          variant="primary"
        >
          Latest adoptions
        </Button>
        <Button
          onClick={() => {
            window.history.pushState(null, "", "#adopt-one");
            window.scrollTo({
              top: 2 * window.innerHeight,
              behavior: "smooth",
            });
          }}
          variant="primary"
        >
          Adopt one
        </Button>
      </div>
    </section>
  );
}
