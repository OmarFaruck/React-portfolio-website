import React from 'react';
import '../Footer/Footer.css'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import GoogleSingUp from '../GoogleSingUp/GoogleSingUp';
import GitHubSingUp from '../GitHubSingUp/GitHubSingUp';
import { FaEnvelopeSquare, FaPhoneSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <section id='Footer' className='bg-success'>
            <div className="d-flex justify-content-center mx-auto"> 
            <Link className='nav-link'>
            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit d-flex align-items-center justify-content-center"><GoogleSingUp className='phone'/></Button>
            </Link>

            <Link className='nav-link'>
            <Button variant='success' className="btn text-light w-100 mt-3 mb-3 submit d-flex align-items-center justify-content-center"><GitHubSingUp className='phone'/></Button>
            </Link>

            <Link className='nav-link' to="tel:+8801858927228">
            <Button variant='success' className="btn text-light w-100 mt-4 mb-3 submit d-flex align-items-center justify-content-center"><FaPhoneSquare className='phone1'/></Button>
            </Link>

            <Link className='nav-link' onClick={() => window.location = 'mailto:yourmail@domain.com'}>
            <Button variant='success' className="btn text-light w-100 mt-4 mb-3 submit d-flex align-items-center justify-content-center"><FaEnvelopeSquare className='phone'/></Button>
            </Link> 

            </div>
        </section>
    );
};

export default Footer;