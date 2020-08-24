import React from 'react';
import img from './error.svg';
import styled from 'styled-components';

const ImgErr = styled.img`
    width: 100%;
`;

const ErrorMessage = () =>{
    return (
        <>
            <ImgErr src={img} alt='error'></ImgErr> 
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;