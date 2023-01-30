import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Example = () => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-6">
                    <h3>
                        <Link to="classcompo">class component </Link>
                    </h3>

                </div>
                <div className="col-6">
                    <h3>Functional component</h3>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Example;