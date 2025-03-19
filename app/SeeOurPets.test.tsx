import { render, screen } from "@testing-library/react";
import SeeOurPets from "./SeeOurPets";

test("SeeOurPets renders", () => {
  render(<SeeOurPets />);
});

test("SeeOurPets is a section", () => {
  render(<SeeOurPets />);
  const section = screen.getByRole("region");
  expect(section.tagName).toBe("SECTION");
});

test("SeeOurPets has a heading", () => {
  render(<SeeOurPets />);
  screen.getByRole("heading");
});

test("SeeOurPets has an image", () => {
  render(<SeeOurPets />);
  screen.getByRole("img");
});

test("SeeOurPets has a link to pets", () => {
  render(<SeeOurPets />);
  const link = screen.getByRole("link", { name: /adopt one/i });
  expect(link).toHaveAttribute("href", "/pets");
});
