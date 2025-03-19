import { render, screen } from "@testing-library/react";
import Anchor from "./Anchor";

test('Anchor has a role of "link"', () => {
  render(<Anchor href="#">Click me</Anchor>);
  screen.getByRole("link");
});

test("Anchor has an href attribute", () => {
  render(<Anchor href="#">Click me</Anchor>);
  const link = screen.getByRole("link", { name: "Click me" });
  expect(link).toHaveAttribute("href", "#");
});

test("Anchor displays its children", () => {
  render(<Anchor href="#">Click me</Anchor>);
  screen.getByRole("link", { name: "Click me" });
});

test('Anchor throws an error when no "href" attribute is provided', () => {
  expect(() => render(<Anchor>Click me</Anchor>)).toThrow();
});
