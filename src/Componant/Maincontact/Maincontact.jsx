
import React from 'react';
import Contactfrom from '../Contactfrom/Contactfrom';
import Container from 'react-bootstrap/Container';
import '../Maincontact/Maincontact.css'
// import Contact from '../Contact/Contact';
// import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import '../Maincontact/Maincontact.css'
 
 
const Maincontact = () => {
    return (
        <section id="maincontact"> 
        
            <Container>
        
            <h1 className="heading contact"> Sing up <span> here </span> </h1>
               
               <Card className='mx-auto p-5'>
               <Contactfrom />
               </Card>
               
               
            </Container>
        </section>
    );
};

export default Maincontact;