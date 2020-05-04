import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Counter.scss";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 0.5 });
  };

  dicrement = () => {
    if (this.state.counter === 0.5) {
      return;
    }
    this.setState({ counter: this.state.counter - 0.5 });
  };

  render() {
    return (
      <div className="counter-body d-flex alight-items-center justify-content-between">
        <div>
          <FontAwesomeIcon onClick={() => this.dicrement()} icon={faMinus} />
        </div>
        <div className="counter-num">{this.state.counter}</div>
        <div>
          <FontAwesomeIcon onClick={() => this.increment()} icon={faPlus} />
        </div>
      </div>
    );
  }
}

export default Counter;
