import React, { Component } from "react";

class CompoLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      data: "something",
    };
  }

  // componentWillMount() {
  //     console.log("componentWillMount");

  // }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps");

  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("nextProps", nextProps, "nextState", nextState);
    // return false: 
    return true;
  }

  // componentWillUpdate(nextProps, nextState) {
  //     console.log("componentWillUpdate");

  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevProps",prevProps, "prevState",prevState);
  }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

  ChangeState = () => {
    console.log("ChangeState Called");
    this.setState = {
      data: "other"
    };
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>Life Cycle</h2>
        <p>{this.state.data}</p>
        <button onClick={this.ChangeState}>click</button>
      </div>
    );
  }
}

export default CompoLifeCycle;
