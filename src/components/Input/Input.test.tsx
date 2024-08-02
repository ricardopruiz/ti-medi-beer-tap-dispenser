import Input from ".";

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import { vi } from "vitest";

/**
 * Since our input is currently only a styled-component
 * all the logic inside of it is the logic native of the HTML element.
 *
 * Based on this, we could think that testing the component is not
 * strictly necessary, but I consider it a good practice since
 * this component could grow in the future and the functionality should
 * be mantained.
 */
describe("Input", () => {
  it("renders an input", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("calls onChange callback with the string the user typed", async () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    const text = faker.word.words();
    userEvent.type(input, text);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: text }),
        })
      );
    });
  });

  it("displays the given value", () => {
    const content = faker.word.words();
    render(<Input value={content} onChange={vi.fn()} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.value).toBe(content);
  });
});
