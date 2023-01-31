import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="classcompointro">class component Intro</Link></li>
                    <li><Link to="JSXExampleClass">class component JSX</Link></li>
                    <li><Link to="PropsExample">class component Props</Link></li>
                    <li><Link to="StateExample">class component Props</Link></li>
                </ul>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassCompoMenu;