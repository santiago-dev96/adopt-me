import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Header has a logo", () => {
  render(<Header />);
  const header = screen.getByAltText("Adopt me! logo");
  expect(header).toBeInTheDocument();
});

test("Header logo is a link to the root path", () => {
  render(<Header />);
  const link = screen.getByRole("link", { name: /adopt me! logo/i });
  expect(link).toHaveAttribute("href", "/");
});

test("Header renders", () => {
  render(<Header />);
});

test("Header is a header element", () => {
  render(<Header />);
  screen.getByRole("banner");
});
