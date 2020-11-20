import React, { useState } from 'react';
import { auth } from './firebase';
import Firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import * as ROUTES from './routes';
import './signup.css';


export default function Signup() {
    const history = useHistory();

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        var provider = new Firebase.auth.GoogleAuthProvider();

        auth
            .signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log(user);
                history.push(ROUTES.HOME);

            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="container">
            <div className="vertical-center">
                <button className="btn" onClick={handleGoogleLogin}>Signup with Google</button>
            </div>
        </div>
    )
}


