import React, { Component } from 'react';

class ConditionalRender extends Component {
constructor(props) {
    super(props);
    this.state={
        count:1,
        status:true
    }
}


    render() {
        let HTMLData="";
        if (this.state.status) {
            HTMLData= <h2>Data</h2>
        } else {
            HTMLData= <h2>No Records</h2>
        }
        return (
            <>
                {JSON.stringify(this.state.status)}
                <button onClick={()=>{this.setState({status:!this.state.status})}}>click</button>
                {HTMLData} 
                {(this.state.status? <h2>Data</h2> : <h2>No Data</h2>)}
            </>
        );
    }
}

export default ConditionalRender;