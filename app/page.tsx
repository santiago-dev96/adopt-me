import AdoptedPets from "./LatestAdoptions";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-5">
        <AdoptedPets />
      </div>
    </>
  );
}
