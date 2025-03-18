import { render, screen } from "@testing-library/react";
import LatestAdoptions from "./LatestAdoptions";

test("AdoptedPets has a list of pets", () => {
  render(<LatestAdoptions />);
  screen.getByRole("list");
});
