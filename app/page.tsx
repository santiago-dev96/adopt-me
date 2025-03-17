import AdoptedPets from "./LatestAdoptions";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />

      <div className="p-5">
        <AdoptedPets />
      </div>
    </>
  );
}
