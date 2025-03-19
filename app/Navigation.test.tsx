import { fireEvent, render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("Navigation has a menu button", () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Navigation has a nav element when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByRole("navigation");
});

test("Navigation has a register link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const link = await screen.findByRole("link", { name: /register/i });
  expect(link).toHaveAttribute("href", "/register");
});

test("Navigation has a login link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const link = await screen.findByRole("link", { name: /login/i });
  expect(link).toHaveAttribute("href", "/login");
});

test("Navigation has a pets link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const link = await screen.findByRole("link", { name: /pets/i });
  expect(link).toHaveAttribute("href", "/pets");
});

test("Navigation has a rules link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const link = await screen.findByRole("link", { name: /rules/i });
  expect(link).toHaveAttribute("href", "/rules");
});

test("Navigation has an impact link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const link = await screen.findByRole("link", { name: /impact/i });
  expect(link).toHaveAttribute("href", "/impact");
});

test("Navigation has an shelters link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const link = await screen.findByRole("link", { name: /shelters/i });
  expect(link).toHaveAttribute("href", "/shelters");
});
