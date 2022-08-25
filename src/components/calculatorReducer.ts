export type Operator = "+" | "-" | "x" | "÷";

type CalculatorState = {
  display: string;
  operand: number | null;
  operator: Operator | null;
  clearDisplay: boolean;
};

export const calculatorInitialState: CalculatorState = {
  display: "0",
  operand: null,
  operator: null,
  clearDisplay: false,
};

export type CalculatorActions =
  | { type: "PRESS_OPERAND"; value: string }
  | { type: "PRESS_OPERATOR"; operator: Operator }
  | { type: "PRESS_EQUALS" }
  | { type: "CLEAR" };

export const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorActions | undefined
): CalculatorState => {
  switch (action?.type) {
    case "PRESS_OPERAND": {
      const display = state.clearDisplay
        ? calculatorInitialState.display
        : state.display;

      return display === calculatorInitialState.display
        ? { ...state, display: action.value, clearDisplay: false }
        : {
            ...state,
            display: state.display + action.value,
            clearDisplay: false,
          };
    }
    case "PRESS_OPERATOR": {
      return {
        ...state,
        operand: Number(state.display),
        operator: action.operator,
        clearDisplay: true,
      };
    }
    case "PRESS_EQUALS": {
      if (!state.operand || !state.operator) return state;

      const operand2 = Number(state.display);
      const display = calculate(
        state.operand,
        operand2,
        state.operator
      ).toString();

      return { ...calculatorInitialState, display, clearDisplay: true };
    }
    case "CLEAR":
      return calculatorInitialState;
    default:
      return state;
  }
};

const calculate = (operand1: number, operand2: number, operator: Operator) => {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "x":
      return operand1 * operand2;
    case "÷":
      return operand1 / operand2;
  }
};
