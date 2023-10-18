import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'; 
// import { FaPhoneSquare, FaEnvelopeSquare } from "react-icons/fa";
import '../Contactfrom/Contactfrom.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'; 
import { Link } from 'react-router-dom';
import GoogleSingUp from '../GoogleSingUp/GoogleSingUp';
import GitHubSingUp from '../GitHubSingUp/GitHubSingUp';
import Card from 'react-bootstrap/Card';
const Contactfrom = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const messegeDiv = document.getElementById('messege-div');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

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
    <section id="From" data-aos="zoom-in-up" data-aos-duration="3000">
      <div className="container">
      <Card className='mx-auto p-5'>
        <div className="row">
          {/* <h1 className='Sing'>Sing In here</h1> */}
           
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

           

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <div id='messege-div'></div> 

            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit" onClick={() => signInWithEmailAndPassword(email, password)}>Submit</Button>
            
            <div className="new_link new px-2">
              <p className="nav-link reglink">New user? <NavLink to="/registration">registration.</NavLink></p>
            </div>

            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit">or</Button> 
            <Link className='nav-link'>
            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit d-flex align-items-center justify-content-center"><GoogleSingUp className='phone'/><h4>Continu with google</h4></Button>
            </Link>

            <Link className='nav-link'>
            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit d-flex align-items-center justify-content-center"><GitHubSingUp className='phone'/><h4>Continu with github</h4></Button>
            </Link>
            
        </div>
        </Card>
      </div>
    </section>
  );
};

export default Contactfrom;