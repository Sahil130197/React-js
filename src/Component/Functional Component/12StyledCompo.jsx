import React from 'react';
import styled from 'styled-components';

const StyledCompo = () => {

    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

    return (
        <>
           <Title>something</Title> 
        </>
    );
};

export default StyledCompo;