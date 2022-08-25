import { expect, test, describe } from "vitest";
import { calculatorInitialState, calculatorReducer } from "./calculatorReducer";

describe("calculatorReducer", () => {
  test("initialState", () => {
    const state = calculatorReducer(calculatorInitialState, undefined);
    expect(state.display).toBe("0");
    expect(state.operand).toBe(null);
    expect(state.operator).toBe(null);
  });

  test("pressing numbers", () => {
    const state = calculatorReducer(calculatorInitialState, {
      type: "PRESS_OPERAND",
      value: "1",
    });

    expect(state.display).toBe("1");

    const newState = calculatorReducer(state, {
      type: "PRESS_OPERAND",
      value: "2",
    });

    expect(newState.display).toBe("12");
  });

  test("adding", () => {
    let state = calculatorReducer(calculatorInitialState, {
      type: "PRESS_OPERAND",
      value: "1",
    });

    state = calculatorReducer(state, { type: "PRESS_OPERATOR", operator: "+" });
    state = calculatorReducer(state, { type: "PRESS_OPERAND", value: "1" });
    state = calculatorReducer(state, { type: "PRESS_EQUALS" });
    expect(state.display).toBe("2");
  });

  test("clear", () => {
    const state = calculatorReducer(calculatorInitialState, {
      type: "PRESS_OPERAND",
      value: "1",
    });
    expect(state.display).toBe("1");

    const newState = calculatorReducer(state, { type: "CLEAR" });
    expect(newState.display).toBe("0");
  });

  test("equals", () => {
    const state = calculatorReducer(calculatorInitialState, {
      type: "PRESS_EQUALS",
    });
    expect(state.display).toBe("0");
  });
});
