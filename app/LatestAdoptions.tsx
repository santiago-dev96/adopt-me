import Carousel from "./Carousel";

export default function AdoptedPets() {
  return (
    <article className="flex flex-col items-center">
      <h1 className="text-3xl text-center mb-5">Latest Pet Adoptions</h1>
      <Carousel />
    </article>
  );
}
