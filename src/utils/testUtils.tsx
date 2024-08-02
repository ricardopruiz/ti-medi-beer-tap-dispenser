import { render, RenderOptions } from "@testing-library/react";
import Providers from "../Providers";

/**
 * Here we are configuring vitest in order to use the
 * providers of the application while render a component
 */
import { ReactElement } from "react";
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  render(<Providers>{ui}</Providers>, options);
};
export * from "@testing-library/react";
export { customRender as render };
