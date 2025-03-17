import { fireEvent, render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("Navigation has a menu button", () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Navigation has a register link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByRole("link", { name: /register/i });
});

test("Navigation has a login link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByRole("link", { name: /login/i });
});

test("Navigation has a pets link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByRole("link", { name: /pets/i });
});

test("Navigation has a rules link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByRole("link", { name: /rules/i });
});

test("Navigation has an impact link when opened", async () => {
  render(<Navigation />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  await screen.findByRole("link", { name: /impact/i });
});
