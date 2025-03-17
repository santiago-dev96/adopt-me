import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Header has a logo", () => {
  render(<Header />);
  const header = screen.getByAltText("Adopt Me!");
  expect(header).toBeInTheDocument();
});

test("Header has a register link", () => {
  render(<Header />);
  const link = screen.getByRole("link", { name: /register/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/register");
});

test("Header has a login link", () => {
  render(<Header />);
  const link = screen.getByRole("link", { name: /login/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/login");
});

test("Header has a pets link", () => {
  render(<Header />);
  const link = screen.getByRole("link", { name: /pets/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});

test("Header has a rules link", () => {
  render(<Header />);
  const link = screen.getByRole("link", { name: /rules/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/rules");
});

test("Header has an impact link", () => {
  render(<Header />);
  const link = screen.getByRole("link", { name: /impact/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/impact");
});
