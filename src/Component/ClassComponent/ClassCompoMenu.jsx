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
                    <li><Link to="StateExample">class component State</Link></li>
                    <li><Link to="compolifecycleExample">class component Life Cycle</Link></li>
                    <li><Link to="conditionalrender">class Conditional Render</Link></li>
                    <li><Link to="listkeys">class List Keys</Link></li>
                    <li><Link to="controlledcompo">class Controlled Compo</Link></li>
                    <li><Link to="uncontrolledcompo">class UnControlled Compo</Link></li>
                    <li><Link to="spreadvsrest">class Spread vs. Rest Compo</Link></li>
                    <li><Link to="compovsinheritance">class Composition vs. Inheritance Compo</Link></li>
                    <li><Link to="statelifting"> Class State Lifting</Link></li>
                    <li><Link to="hoc"> Class Compo HOC</Link></li>
                </ul>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassCompoMenu;