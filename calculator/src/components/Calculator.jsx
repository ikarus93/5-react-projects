import React from 'react';
import Row from './stateless/Row.jsx';

class Calculator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      val: 0,
      innerVal: "",
      lastVal: 0,
      bottomNums: [],
      midNums: [],
      topNums: [],
      ops: []
    };

//function binding because of es6 class syntax
    this.createNumberFields = this.createNumberFields.bind(this);
    this.createOpFields = this.createOpFields.bind(this);
    this.updateVal = this.updateVal.bind(this);
    this.result = this.result.bind(this);
    this.makeOp = this.makeOp.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)

    this.createNumberFields();
    this.createOpFields();
  }

  updateVal(x) {
    
    if ("x-+÷".indexOf(this.state.val) !== -1) {
      this.state.val = ""
    }
    this.setState({ val: this.state.val + x, innerVal: this.state.innerVal + x });
  }

  createNumberFields() {
    //Creates the number fields of calculator and sorts them in different state containers(bottomNums, midNums, topNums)
    let temp = [];
    for (let i = 1; i < 10; i++) {
      temp.push({ className: "num", handler: this.updateVal, text: i });
      if (i % 3 === 0) {
        if (i < 4) {
          this.state.bottomNums = temp;
          temp = [];
        } else if (i < 7) {
          this.state.midNums = temp;
        } else {
          this.state.topNums = temp;
        }
        this.setState(this.state);
        temp = [];
      }
    }
  }
  createOpFields() {
      //Creates fields for the operation symbols, binding operation handler on each
    const symbols = ["+", "-", "÷", "x", "="];
    let x = [];
    symbols.forEach(symbol => {
      x.push({ class: "operators", handler: this.makeOp, text: symbol });
    });
    this.state.ops = x
      this.setState(this.state)
  }
  
  makeOp(calc) {
    let operator = calc;
    if (calc == "÷") operator = "/";
    if (calc == "x") operator = "*";
    if (calc != "=") {
      this.setState({ val: calc, innerVal: this.state.innerVal + operator });
    } else {
      this.result();
    }
  }
    handleKeyPress(e) {
      console.log("FIRE")
      const opKeys = [42,43,45,47];
      if (opKeys.indexOf(e.charCode) !== -1) {
        this.makeOp(String.fromCharCode(e.charCode))
      } else {
        let key = String.fromCharCode(e.charCode);
        if (!isNaN(key)) {
          this.updateVal(key)
        }
      }
    }

     componentWillMount() {
    document.onKeyPress = this.handleKeyPress
  }

     result() {
    this.state.val = eval(this.state.innerVal);
    this.setState(this.state);
  }


  render() {
    return (
      <div className="calc">
        <Output val={this.state.val} />
        <div className="numbers-clear">
          <Row
            fields={[
              {
                className: "clear",
                handler: () => {
                  this.setState({ val: 0, innerVal : "" });
                },
                text: "clear"
              }
            ]}
          />
          <Row fields={this.state.topNums} />
          <Row fields={this.state.midNums} />
          <Row fields={this.state.bottomNums} />
          <Row 
            fields={[{ className: "zero", handler: this.updateVal, text: "0" }]}
          />
          <Row fields={this.state.ops} className="ops-wrapper" />
        </div>
      </div>
    );
  }
}

export default Calculator;
