import { render, screen, waitFor } from "../../utils/testUtils";
import { vi, it, describe, expect } from "vitest";
import { faker } from "@faker-js/faker";

import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Button from ".";

describe("Button", () => {
  it("shows a form button", () => {
    render(<Button onClick={vi.fn()}>test</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("calls a callback when button is clicked", async () => {
    const callback = vi.fn();
    render(<Button onClick={callback}>test</Button>);

    const button = screen.getByRole("button");

    await waitFor(() => {
      userEvent.click(button);
      expect(callback).toHaveBeenCalled();
    });
  });

  it("displays the button in loading mode", () => {
    render(<Button loading>test</Button>);

    const spinner = screen.getByLabelText("loading-spinner-container");

    expect(spinner).toBeInTheDocument();
  });

  it("displays the children content inside the button", () => {
    const child = faker.word.words(4);

    render(<Button>{child}</Button>);

    const getChild = screen.getByText(child);

    expect(getChild).toBeInTheDocument();
  });

  it("displays the button on disabled mode", () => {
    render(<Button disabled>test</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("disabled");
  });
});
