import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import FunctionalCompoIntro from './01FunctionalCompoIntro.jsx';
import FunctionalProps from './02FunctionalProps.jsx';
import FunctionalState from './03FunctionalState.jsx';
import FunctionalUseEffect from './04FunctionalUseEffect.jsx';
import FunctionalUseLayoutEffect from './05FunctionalUseLayoutEffect.jsx';


class ClassCompoRouter extends Component {
    render() {
        return (
            
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="functionalCompoIntro" element={<FunctionalCompoIntro />} />
                        <Route path="functionalprops" element={<FunctionalProps />} />
                        <Route path="functionalstate" element={<FunctionalState />} />
                        <Route path="functionaluseeffect" element={<FunctionalUseEffect />} />
                        <Route path="functionaluselayouteffect" element={<FunctionalUseLayoutEffect />} />
                    </Route>
                </Routes>
            
        );
    }
}

export default ClassCompoRouter;