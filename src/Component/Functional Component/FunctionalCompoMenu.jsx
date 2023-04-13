import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <div className='row'>
                <div className="offset-md-6">
                <ul>
                    <li><Link to="functionalCompoIntro">Functional component Intro</Link></li>
                    <li><Link to="functionalprops">Functional Props</Link></li>
                    <li><Link to="functionalstate">Functional State</Link></li>
                    <li><Link to="functionaluseeffect">Functional Useeffect</Link></li>
                    <li><Link to="functionaluselayouteffect">Functional UseLayouteffect</Link></li>
                    <li><Link to="functionalusecontext">Functional UseContext</Link></li>
                    <li><Link to="functionalusereducer">Functional UseReducer</Link></li>
                </ul>

                </div>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassCompoMenu;