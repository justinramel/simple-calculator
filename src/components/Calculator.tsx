import "./Calculator.scss";

export const Calculator = () => {
  return (
    <div className="calculator" data-testid="calculator">
      <label className="display" data-testid="display">
        0
      </label>

      <section className="buttons">
        <button className="clear">C</button>
        <a
          href="https://www.equalexperts.com/"
          target="_blank"
          rel="noreferrer"
          className="wide"
        >
          <img src="/logo.svg" className="logo" alt="Equal Experts logo" />
        </a>

        <button className="operator selected">÷</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operator">x</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="operator">-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="operator">+</button>

        <button className="wide">0</button>
        <button>.</button>
        <button className="operator">=</button>
      </section>
    </div>
  );
};
