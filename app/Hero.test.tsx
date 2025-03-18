import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("Hero has a title", () => {
  render(<Hero />);
  screen.getByRole("heading", { name: /adopt me!/i });
});

test("Hero has a button to navigate to the latest pet adoptions", () => {
  render(<Hero />);
  screen.getByRole("button", { name: /latest adoptions/i });
});

test("Hero has a button to navigate to the list of available pets", () => {
  render(<Hero />);
  screen.getByRole("button", { name: /adopt one/i });
});
