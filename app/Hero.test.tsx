import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("Hero renders", () => {
  render(<Hero />);
});

test("Hero is a main element", () => {
  render(<Hero />);
  screen.getByRole("main");
});

test("Hero has a button to navigate to the list of available pets", () => {
  render(<Hero />);
  screen.getByRole("button", { name: /adopt a pet/i });
});
