import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import img from '../images/icon.png'
import Button from 'react-bootstrap/esm/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth);
  // console.log(user);

  //Sing out function
  const handleSingOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className='nav-link' to="#home">
            <img src={img} alt="" className='img-fluid mx-auto logo' />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link' to="/">home</Link> 
              <Link className='nav-link' to="#About" smooth>about</Link>
              <Link className='nav-link' to="#experience" smooth>experience</Link>
              <Link className='nav-link' to="#service" smooth>service</Link>
              <Link className='nav-link' to="#Portfolio" smooth>portfolio</Link>
              <Link className='nav-link' to="/registration" smooth>contact</Link>
              {user ? (
                <Button className="btn btn-primary sing_out" onClick={handleSingOut}>sing out</Button>
              ) : (

                <NavLink className="nav-link sing_in" to="/">sing in</NavLink>
              )
              }
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;