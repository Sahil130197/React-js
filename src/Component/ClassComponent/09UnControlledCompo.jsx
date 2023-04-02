import React, { Component } from "react";

class UnControlledCompo extends Component {
  constructor() {
    super();
    this.inpref = React.createRef();
    console.log("called");
  }

  inpRefSubmit=(e)=> {
      e.preventDefault()
    console.log(this.inpref.current.value);
  }

  render() {
    return (
      <>
        <form action="submit" method="post" onSubmit={this.inpRefSubmit}>
          <input type="text" ref={this.inpref} name="" id="" />
          {JSON.stringify(this.inpref)}
        </form>
      </>
    );
  }
}

export default UnControlledCompo;
