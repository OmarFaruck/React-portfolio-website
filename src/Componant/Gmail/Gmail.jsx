import React, { memo } from 'react';
import {FaEnvelopeSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
const Gmail = memo(() => {
    return (
        <>
            <Button> <FaEnvelopeSquare  className='envelope_1'/>  </Button>  
        </>
    );
});

export default Gmail;