import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Button from "./Button";

test("Button renders its text", () => {
  render(<Button variant="primary">Click me!</Button>);
  screen.getByText("Click me!");
});

test("Button accepts type=submit attribute", async () => {
  const handler = jest.fn();
  render(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handler();
      }}
    >
      <Button type="submit" variant="primary">Submit</Button>
    </form>,
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);
  await waitFor(() => expect(handler).toHaveBeenCalled());
});

test("Button accepts type=button attribute", async () => {
  const handler = jest.fn();
  render(
    <Button
      type="button"
      onClick={handler}
      variant="primary"
    >
      Click me!
    </Button>,
  );
  const button = screen.getByRole("button", { name: "Click me!" });
  fireEvent.click(button, {});
  await waitFor(() => expect(handler).toHaveBeenCalled());
});
