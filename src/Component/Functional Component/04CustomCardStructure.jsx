import React, { Component } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple
} from 'mdb-react-ui-kit';

const CustomCardStructure = (props) => {
    return (
        <div className="row">
                <div >
                <MDBCard>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={process.env.PUBLIC_URL +"/"+ props.imgUrl} fluid alt='...' />
                        <a>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>{props.title}</MDBCardTitle>
                        <MDBCardText>
                        {props.children}
                        </MDBCardText>
                        <MDBBtn class="text-dark fw-bold btn btn-info" href='#'>Know More</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </div>
            </div>
    );
};

export default CustomCardStructure;