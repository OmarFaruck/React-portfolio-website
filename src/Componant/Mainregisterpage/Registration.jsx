import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'; 
// import { FaPhoneSquare, FaEnvelopeSquare } from "react-icons/fa";
import '../Contactfrom/Contactfrom.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { FaEnvelopeSquare, FaPhoneSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
import Card from 'react-bootstrap/Card';
const Registration = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const messegeDiv = document.getElementById('messege-div');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  if (error) {
    messegeDiv.innerHTML = error;

  }

  if (loading) {
    messegeDiv.innerHTML = <p>Loading...</p>;

  }

  if (user) {
    messegeDiv.innerHTML = "User Singin successfully";
  }
 
    return (
        <>
            
        
        
           
        <section id="From" data-aos="zoom-in-up" data-aos-duration="3000">
        
      <div className="container">
      <h1 className="heading contact"> Sing In <span> here </span> </h1>
      <Card className='mx-auto p-5'>
        <div className="row">
          {/* <h1 className='Sing'>Sing In here</h1> */}
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

           

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <div id='messege-div'></div>
 
            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit" onClick={() => createUserWithEmailAndPassword(email, password)}>Submit</Button>

            <div className="new_link new px-2">
              <p className="nav-link reglink">are you registered? <NavLink to="/login">login.</NavLink></p>
            </div>

            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit">or</Button>

           
            <Link className='nav-link' to="tel:+8801858927228">
            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit d-flex align-items-center justify-content-center"><FaPhoneSquare className='phone1'/><h4>Continu with contact</h4></Button>
            </Link>

            <Link className='nav-link' onClick={() => window.location = 'mailto:yourmail@domain.com'}>
            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit d-flex align-items-center justify-content-center"><FaEnvelopeSquare className='phone'/><h4>Continu with email</h4></Button>
            </Link> 
        </div>
        </Card>
      </div>
    </section>
           
         
       
        </>
    );
};

export default Registration;