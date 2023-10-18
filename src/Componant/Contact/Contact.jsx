import React from 'react';

import { FaPhoneSquare, FaEnvelopeSquare } from "react-icons/fa";
import '../Contact/Contact.css'
import FaceBookSingUp from '../FaceBookSingUp/FaceBookSingUp';
import GitHubSingUp from '../GitHubSingUp/GitHubSingUp';
import Gmail from '../Gmail/Gmail';
import GoogleSingUp from '../GoogleSingUp/GoogleSingUp';
import '../Contact/Contact.css'
import { HashLink as Link } from 'react-router-hash-link';
const Contact = () => {
  return (
    <div className="information" data-aos-duration="3000" data-aos="zoom-in-left">
      <div className="text-center">
        <h1>LogIn Information</h1>
        <div className="con_information">

          <Link className='nav-link' to="tel:+8801858927228"><FaPhoneSquare className='phone' /></Link>
          <p>+8801858927228</p>
        </div>
        <div className="con_information">

          <Link onClick={() => window.location = 'mailto:yourmail@domain.com'}><FaEnvelopeSquare className='envelope' /></Link>
          <p className='nav-link'>omarfaruck1994@gmial.com</p>
        </div>
        <span className="text-center fs-4">Or Login With</span>
        <span><hr /></span>
        <div className="font">

          <GoogleSingUp />
          <FaceBookSingUp />
          <GitHubSingUp />
          <Gmail />

        </div>
      </div>
    </div>
  );
};

export default Contact;