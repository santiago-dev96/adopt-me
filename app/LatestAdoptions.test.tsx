import { render, screen } from "@testing-library/react";
import AdoptedPets from "./LatestAdoptions";

test("AdoptedPets has a title", () => {
  render(<AdoptedPets />);
  const title = screen.getByRole("heading", { name: /latest pet adoptions/i });
  expect(title).toBeInTheDocument();
});

test("AdoptedPets has a list of pets", () => {
  render(<AdoptedPets />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});
