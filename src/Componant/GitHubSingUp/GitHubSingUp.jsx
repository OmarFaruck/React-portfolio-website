import React from 'react';
import {FaGithubSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import '../GitHubSingUp/GitHubSingUp.css'  
import '../GoogleSingUp/GoogleSingUp.css' 
import { useSignInWithGithub  } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const GitHubSingUp = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
            
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
             <Button type='submit' variant='success' onClick={() => signInWithGithub()}><FaGithubSquare  className='github'/></Button> 
        </>
    );
};

export default GitHubSingUp;