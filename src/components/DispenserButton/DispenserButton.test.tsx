import DispenserButton from ".";

import { render, screen, fireEvent, waitFor } from "../../utils/testUtils";
import { vi } from "vitest";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("DispenserButton", () => {
  it("calls openDispenser callback on mouse down", () => {
    const openDispenser = vi.fn();

    render(
      <DispenserButton openDispenser={openDispenser} closeDispenser={vi.fn()} />
    );

    const button = screen.getByRole("button");

    fireEvent.mouseDown(button);

    expect(openDispenser).toHaveBeenCalled();
  });

  it("calls closeDispenser callback on mouse up", () => {
    const closeDispenser = vi.fn();

    render(
      <DispenserButton
        openDispenser={vi.fn()}
        closeDispenser={closeDispenser}
      />
    );

    const button = screen.getByRole("button");

    fireEvent.mouseUp(button);

    expect(closeDispenser).toHaveBeenCalled();
  });

  it("calls both callbacks when user makes a complete click", async () => {
    const closeDispenser = vi.fn();
    const openDispenser = vi.fn();

    render(
      <DispenserButton
        closeDispenser={closeDispenser}
        openDispenser={openDispenser}
      />
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    await waitFor(() => {
      expect(openDispenser).toHaveBeenCalled();
      expect(closeDispenser).toHaveBeenCalled();
    });
  });
});
