import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import ClassCompoJSXExample from './02ClassCompoJSXExample.jsx';
import ClassCompoPropsExample from './03ClassCompoPropsExample.jsx';
import ClassCompoStateExample from './04ClassCompoStateExample.jsx';
import ClassLifeCycleExample from './05CompoLifeCycle.jsx';
import ConditionalRender from './06ConditionalRender.jsx';
import ListKeys from './07ListKeysArrayMap.jsx';
import ControlledCompo from './08ControlledCompo.jsx';
import UnControlledCompo from './09UnControlledCompo.jsx';
import SpreadvsRest from './10SpreadvsRest.jsx';
import CompositionvsInheritance from './11CompositionVsInheritance.jsx';


class ClassCompoRouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="ClassCompoIntro" element={<ClassCompoIntro />} />
                        <Route path="JSXExampleClass" element={<ClassCompoJSXExample />} />
                        <Route path="PropsExample" element={<ClassCompoPropsExample />} />
                        <Route path="StateExample" element={<ClassCompoStateExample />} />
                        <Route path="compolifecycleExample" element={<ClassLifeCycleExample />} />
                        <Route path="conditionalrender" element={<ConditionalRender />} />
                        <Route path="listkeys" element={<ListKeys />} />
                        <Route path="controlledcompo" element={<ControlledCompo />} />
                        <Route path="uncontrolledcompo" element={<UnControlledCompo />} />
                        <Route path="spreadvsrest" element={<SpreadvsRest />} />
                        <Route path="compovsinheritance" element={<CompositionvsInheritance />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRouter;