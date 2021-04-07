import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const Calculator = (props) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td colSpan="4" id="display">
            {props.display}
          </td>
        </tr>
        <tr>
          <td
            id="clear"
            onClick={props.onClear}
            colSpan="2"
            className="operation">
            C
          </td>
          <td id="divide" className="operation" onClick={props.onNumber}>
            /
          </td>
          <td id="multiply" className="operation" onClick={props.onNumber}>
            *
          </td>
        </tr>
        <tr>
          <td id="seven" onClick={props.onNumber}>
            7
          </td>
          <td id="eight" onClick={props.onNumber}>
            8
          </td>
          <td id="nine" onClick={props.onNumber}>
            9
          </td>
          <td id="subtract" className="operation" onClick={props.onNumber}>
            -
          </td>
        </tr>
        <tr>
          <td id="four" onClick={props.onNumber}>
            4
          </td>
          <td id="five" onClick={props.onNumber}>
            5
          </td>
          <td id="six" onClick={props.onNumber}>
            6
          </td>
          <td id="add" className="operation" onClick={props.onNumber}>
            +
          </td>
        </tr>
        <tr>
          <td id="one" onClick={props.onNumber}>
            1
          </td>
          <td id="two" onClick={props.onNumber}>
            2
          </td>
          <td id="three" onClick={props.onNumber}>
            3
          </td>
          <td
            rowSpan="2"
            id="equals"
            className="operation"
            onClick={props.onEqual}>
            =
          </td>
        </tr>
        <tr>
          <td id="zero" colSpan="2" onClick={props.onNumber}>
            0
          </td>
          <td id="decimal" onClick={props.onNumber}>
            .
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculator;
