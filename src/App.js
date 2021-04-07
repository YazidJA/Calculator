import React, { Component } from "react";
import Calculator from "./Calculator";

// To do:

// Replace double operators
// Add Operations
// Add Rounding
// Limit Input Width

class App extends Component {
  state = {
    result: 0,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keypress.bind(this));
  }

  clear() {
    this.setState({ result: 0 });
  }

  input(key) {
    let result = this.state.result;
    let lastInput = result[result.length - 1];

    // check if the first input is acceptable
    if (result === 0 && /[1-9-.]/.test(key)) {
      this.setState({ result: key });
    }
    // check if there are double points
    else if (/[.]/.test(result) && key === ".") {
    }
    // check if there are double operators
    else if (/[+*/]/.test(lastInput) && /[+*/]/.test(key)) {
      // COMPLETE HERE
    }
    // catch case
    else if (result !== 0) {
      this.setState({ result: result + key });
    }

    console.log("lastInput: " + lastInput + " input: " + key);
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
    let array = this.state.result.split(/[*/+-]/);
    console.log(array);
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
