import { render, screen } from "@testing-library/react";
import PetCards from "./PetCards";

test("PetCards renders", () => {
  render(<PetCards />);
});

test("PetCards is a list", () => {
  render(<PetCards />);
  screen.getByRole("list");
});

test("PetCards accepts children", () => {
  render(
    <PetCards>
      <li>Item 1</li>
      <li>Item 2</li>
    </PetCards>,
  );
});
