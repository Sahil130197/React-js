import React, { Component } from "react";

class ControlledCompo extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //     username: ""
    // }
    this.state = {
      username: "",
      formData: {},
    };
  }

  setDataToState = (e) => {
    console.log("called");
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.setDataToState}
          value={this.state.username}
        />
        {this.state.username}
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
          value={this.state.username}
        />
        {this.state.username}
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            this.setState(() => ({
              formData: { [e.target.name]: e.target.value },
            }));
          }}
          name="username"
        />
        {this.state.username}
        <br />
        <br />

        <input
          type="text"
          onChange={(e) => {
            this.setState((data) => ({
              formData: { ...data.formData, [e.target.name]: e.target.value },
            }));
          }}
          name="password"
        />

        {JSON.stringify(this.state)}
      </>
    );
  }
}

export default ControlledCompo;
