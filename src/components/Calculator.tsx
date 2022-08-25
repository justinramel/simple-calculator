import "./Calculator.scss";
import { useReducer } from "react";
import { calculatorInitialState, calculatorReducer } from "./calculatorReducer";

export const Calculator = () => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    calculatorInitialState
  );

  return (
    <div className="calculator">
      <label className="display" data-testid="display">
        {state.display}
      </label>

      <section className="buttons">
        <button className="clear" onClick={() => dispatch({ type: "CLEAR" })}>
          C
        </button>
        <a
          href="https://www.equalexperts.com/"
          target="_blank"
          rel="noreferrer"
          className="wide"
        >
          <img src="/logo.svg" className="logo" alt="Equal Experts logo" />
        </a>

        <button
          className={`operator ${state.operator === "÷" && "selected"}`}
          onClick={() => dispatch({ type: "PRESS_OPERATOR", operator: "÷" })}
        >
          ÷
        </button>

        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "7" })}>
          7
        </button>
        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "8" })}>
          8
        </button>
        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "9" })}>
          9
        </button>
        <button
          className={`operator ${state.operator === "x" && "selected"}`}
          onClick={() => dispatch({ type: "PRESS_OPERATOR", operator: "x" })}
        >
          x
        </button>

        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "4" })}>
          4
        </button>
        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "5" })}>
          5
        </button>
        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "6" })}>
          6
        </button>
        <button
          className={`operator ${state.operator === "-" && "selected"}`}
          onClick={() => dispatch({ type: "PRESS_OPERATOR", operator: "-" })}
        >
          -
        </button>

        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "1" })}>
          1
        </button>
        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "2" })}>
          2
        </button>
        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "3" })}>
          3
        </button>
        <button
          className={`operator ${state.operator === "+" && "selected"}`}
          onClick={() => dispatch({ type: "PRESS_OPERATOR", operator: "+" })}
        >
          +
        </button>

        <button
          onClick={() => dispatch({ type: "PRESS_OPERAND", value: "0" })}
          className="wide"
        >
          0
        </button>
        <button onClick={() => dispatch({ type: "PRESS_OPERAND", value: "." })}>
          .
        </button>
        <button
          className="operator"
          onClick={() => dispatch({ type: "PRESS_EQUALS" })}
        >
          =
        </button>
      </section>
    </div>
  );
};
