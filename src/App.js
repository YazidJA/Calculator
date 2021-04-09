import React, { Component } from "react";
import Calculator from "./Calculator";

// To do (some day...):

// Add Rounding
// Limit Input Length
// Clean up code

const operators = /[-+*/]/;
const endOperators = /\D+$/;

class App extends Component {
  state = {
    result: "0",
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keypress.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keypress.bind(this));
  }

  clear() {
    this.setState({ result: "0" });
  }

  input(key) {
    let result = this.state.result;
    let array1 = result.split(/[-+*/]/);
    let index1 = array1.length - 1;
    let array2 = result.split("");
    let index2 = array2.length - 1;

    // if the key is a 0
    if (key === "0" && result === "0") {
      return;
    }
    // if the key is a Number
    else if (key >= 0) {
      if (result === "0") {
        this.setState({ result: key });
      } else {
        this.setState({ result: result + key });
      }
    }
    // if the key is a Point
    else if (key === ".") {
      if (/[.]/.test(array1[index1])) {
        return;
      } else {
        this.setState({ result: result + key });
      }
    }
    // if the operator is Minus
    else if (key === "-") {
      if (array2[index2] === "+") {
        array2[index2] = key;
        this.setState({ result: array2.join("") });
      } else if (array2[index2] === "-") {
        array2[index2] = "";
        this.setState({ result: array2.join("") });
      } else {
        this.setState({ result: result + key });
      }
    }
    // if there are double operators
    else if (operators.test(key) && endOperators.test(result)) {
      this.setState({ result: result.replace(/\D+$/, key) });
    }
    // catch case
    else if (result !== "0") {
      this.setState({ result: result + key });
    }
  }

  keypress(e) {
    let key = e.key;
    let regex = /[0-9-+*/.]/;
    if (key === "=" || key === "Enter") {
      this.equal();
    } else if (regex.test(key)) {
      this.input(key);
    }
  }

  number(e) {
    let key = e.target.innerHTML;
    this.input(key);
  }

  equal() {
    let expression = this.state.result;
    if (endOperators.test(expression)) {
      let i = expression.match(endOperators)[0].length;
      expression = expression.slice(0, -i);
    }
    expression.replace(/(x|\/|\+)‑/, "$1-");
    let result = eval(expression).toString();
    this.setState({ result });
  }

  render() {
    return (
      <Calculator
        display={this.state.result}
        onClear={this.clear.bind(this)}
        onNumber={this.number.bind(this)}
        onEqual={this.equal.bind(this)}
        onKeyPress={this.keypress.bind(this)}
      />
    );
  }
}

export default App;
