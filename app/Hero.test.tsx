import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("Hero renders", () => {
  render(<Hero />);
});

test("Hero is a main element", () => {
  render(<Hero />);
  screen.getByRole("main");
});

test("Hero has an anchor to navigate to the list of available pets", () => {
  render(<Hero />);
  const link = screen.getByRole("link", { name: /adopt a pet/i });
  expect(link).toHaveAttribute("href", "/pets");
});
