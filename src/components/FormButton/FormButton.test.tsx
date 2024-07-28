import { render, screen, waitFor } from "@testing-library/react";
import { vi, it, describe, expect } from "vitest";
import { faker } from "@faker-js/faker";

import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import FormButton from ".";

describe("FormButton", () => {
  it("shows a form button", () => {
    render(<FormButton onClick={vi.fn()}>test</FormButton>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("calls a callback when button is clicked", async () => {
    const callback = vi.fn();
    render(<FormButton onClick={callback}>test</FormButton>);

    const button = screen.getByRole("button");

    await waitFor(() => {
      userEvent.click(button);
      expect(callback).toHaveBeenCalled();
    });
  });

  it("displays the button in loading mode", () => {
    render(<FormButton loading>test</FormButton>);

    const spinner = screen.getByLabelText("loading-spinner-container");

    expect(spinner).toBeInTheDocument();
  });

  it("displays the children content inside the button", () => {
    const child = faker.word.words(4);

    render(<FormButton>{child}</FormButton>);

    const getChild = screen.getByText(child);

    expect(getChild).toBeInTheDocument();
  });

  it("displays the button on disabled mode", () => {
    render(<FormButton disabled>test</FormButton>);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("disabled");
  });
});
