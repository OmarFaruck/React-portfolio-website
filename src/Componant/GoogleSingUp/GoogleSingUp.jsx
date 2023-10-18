import React from 'react';
import {FaGooglePlusSquare} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import '../GoogleSingUp/GoogleSingUp.css' 
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
const GoogleSingUp = () => {
    const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
            
            const messegeDiv =document.getElementById('messege-div');

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
            <div id='messege-div'></div>
             <Button type="sub" className="w-0" onClick={() => SignInWithGoogle()}><FaGooglePlusSquare  className='Google'/></Button> 
        </>
    );
};

export default GoogleSingUp;