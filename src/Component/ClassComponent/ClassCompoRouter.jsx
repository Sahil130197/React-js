import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import ClassCompoJSXExample from './02ClassCompoJSXExample.jsx';


class ClassCompoRouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="ClassCompoIntro" element={<ClassCompoIntro />} />
                        <Route path="JSXExampleClass" element={<ClassCompoJSXExample />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRouter;