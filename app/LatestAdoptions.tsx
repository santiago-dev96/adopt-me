import Carousel from "./Carousel";

export default function AdoptedPets() {
  return (
    <section id="latest-adoptions" className="flex flex-col items-center">
      <h2 className="text-3xl text-center mb-5">Latest Pet Adoptions</h2>
      <Carousel />
    </section>
  );
}
