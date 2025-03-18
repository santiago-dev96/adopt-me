import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("Hero has a button to navigate to the list of available pets", () => {
  render(<Hero />);
  screen.getByRole("button", { name: /adopt a pet/i });
});
