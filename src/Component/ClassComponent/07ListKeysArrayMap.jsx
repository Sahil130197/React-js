import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListKeysArrayMap extends Component {
    render() {

        let arr = [15,20,25,30,35,40]

        let MenuData = {"/home":"Home", "/about":"About"}

        // let PrintData= arr.map(()=>{
        //     return <li>test</li>
        // })
        let MenuItem= Object.entries(MenuData).map(([key,data],index)=>{
            return <li key={index}> <Link to={key}>{data}</Link> </li>
        })
        return (
            <>
             {arr}
            {/* {PrintData} */}
            {MenuItem}
            </>
        );
    }
}

export default ListKeysArrayMap