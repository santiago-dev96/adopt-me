import { render, screen } from "@testing-library/react";
import PetCard from "./PetCard";

test("PetCard renders", () => {
  render(<PetCard width={200} />);
});

test("PetCard is a list item", () => {
  render(<PetCard width={200} />);
  screen.getByRole("listitem");
});
