import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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

  test("click buttons", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "5" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "7" }));
    fireEvent.click(screen.getByRole("button", { name: "8" }));
    fireEvent.click(screen.getByRole("button", { name: "9" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "." }));

    expect(screen.getByTestId("display").textContent).toBe("1234567890.");
  });

  test("add", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("display").textContent).toBe("2");
  });

  test("subtract", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("display").textContent).toBe("42");
  });

  test("multiply", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "x" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("display").textContent).toBe("30");
  });

  test("divide", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "÷" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("display").textContent).toBe("7");
  });

  test("clear", async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));

    expect(screen.getByTestId("display").textContent).toBe("123");

    fireEvent.click(screen.getByRole("button", { name: "C" }));

    expect(screen.getByTestId("display").textContent).toBe("0");
  });
});
