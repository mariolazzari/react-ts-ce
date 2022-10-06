import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  onClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default Counter;
