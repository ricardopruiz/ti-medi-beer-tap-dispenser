import { render, screen } from "../../utils/testUtils";
import { it, describe, expect } from "vitest";

import "@testing-library/jest-dom";
import { DispenserDetails } from "../../types/dispenser.types";
import DispenserHistory from ".";

const mockedUsages: DispenserDetails["usages"] = [
  {
    opened_at: new Date("2024-07-30T15:35:22.809000Z"),
    closed_at: new Date("2024-07-30T15:35:26.664000Z"),
    flow_volume: 0.03,
    total_spent: 36.75,
  },
];

describe("DispenserHistory", () => {
  it("renders the operative time", () => {
    render(<DispenserHistory dispenserHistory={mockedUsages} />);
    const operativeTime = screen.getByText("30 Jul 05:35:22 - 30 Jul 05:35:26");

    expect(operativeTime).toBeInTheDocument();
  });

  it("renders the open time", () => {
    render(<DispenserHistory dispenserHistory={mockedUsages} />);
    const openTime = screen.getByText("3,86 s");

    expect(openTime).toBeInTheDocument();
  });

  it("renders the flow rate", () => {
    render(<DispenserHistory dispenserHistory={mockedUsages} />);

    const flowRate = screen.getByText("0,030 l/s");

    expect(flowRate).toBeInTheDocument();
  });

  it("renders the liters served", () => {
    render(<DispenserHistory dispenserHistory={mockedUsages} />);
    const litersServed = screen.getByText("0,12 l");

    expect(litersServed).toBeInTheDocument();
  });

  it("renders the total revenue", () => {
    render(<DispenserHistory dispenserHistory={mockedUsages} />);
    const total = screen.getByText("36,75 €");

    expect(total).toBeInTheDocument();
  });
});
