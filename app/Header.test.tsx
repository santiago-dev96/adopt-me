import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Header has a logo", () => {
  render(<Header />);
  const header = screen.getByAltText("Adopt Me!");
  expect(header).toBeInTheDocument();
});
