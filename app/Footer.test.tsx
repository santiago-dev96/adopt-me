import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Footer is a footer element", () => {
  render(<Footer />);
  screen.getByRole("contentinfo");
});

test("Footer has the logo", () => {
  render(<Footer />);
  screen.getByAltText("Adopt me! logo");
});

test("Footer logo is a link to the root path", () => {
  render(<Footer />);
  const link = screen.getByRole("link", { name: /adopt me! logo/i });
  expect(link).toHaveAttribute("href", "/");
});

test("Footer has a copyright", () => {
  render(<Footer />);
  const copyPattern = new RegExp(
    `© ${new Date().getFullYear()} Adopt Me! Inc.`,
    "i",
  );
  screen.getByText(copyPattern);
});

test("Footer has a navigation element", () => {
  render(<Footer />);
  screen.getByRole("navigation");
});

test("Footer has a link to /pets", () => {
  render(<Footer />);
  const link = screen.getByRole("link", { name: /pets/i });
  expect(link).toHaveAttribute("href", "/pets");
});

test("Footer has a link to /shelters", () => {
  render(<Footer />);
  const link = screen.getByRole("link", { name: /shelters/i });
  expect(link).toHaveAttribute("href", "/shelters");
});

test("Footer has a link to /rules", () => {
  render(<Footer />);
  const link = screen.getByRole("link", { name: /rules/i });
  expect(link).toHaveAttribute("href", "/rules");
});

test("Footer has a link to /impact", () => {
  render(<Footer />);
  const link = screen.getByRole("link", { name: /impact/i });
  expect(link).toHaveAttribute("href", "/impact");
});

test("Footer has a link to instagram", () => {
  render(<Footer />);
  const link = screen.getByRole("link", {
    name: /adopt me! inc\. on instagram/i,
  });
  expect(link).toHaveAttribute("href", "https://www.instagram.com");
});
