import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Calculator } from "./Calculator";

describe("<Calculator />", () => {
  test("render", () => {
    render(<Calculator />);

    expect(screen.getByTestId("display")).toBeDefined();

    expect(
      screen.getByRole("img", { name: /equal experts logo/i })
    ).toBeDefined();

    expect(screen.getByRole("button", { name: "1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "2" })).toBeDefined();
    expect(screen.getByRole("button", { name: "3" })).toBeDefined();
    expect(screen.getByRole("button", { name: "4" })).toBeDefined();
    expect(screen.getByRole("button", { name: "5" })).toBeDefined();
    expect(screen.getByRole("button", { name: "6" })).toBeDefined();
    expect(screen.getByRole("button", { name: "7" })).toBeDefined();
    expect(screen.getByRole("button", { name: "8" })).toBeDefined();
    expect(screen.getByRole("button", { name: "9" })).toBeDefined();
    expect(screen.getByRole("button", { name: "0" })).toBeDefined();
    expect(screen.getByRole("button", { name: "." })).toBeDefined();
    expect(screen.getByRole("button", { name: "C" })).toBeDefined();
    expect(screen.getByRole("button", { name: "÷" })).toBeDefined();
    expect(screen.getByRole("button", { name: "x" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-" })).toBeDefined();
    expect(screen.getByRole("button", { name: "+" })).toBeDefined();
    expect(screen.getByRole("button", { name: "=" })).toBeDefined();
  });
});
