import React from 'react';
// import useFirebase from '../../hooks/useFirebase';

import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Login = () => {
  // const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

    // const {signInWithGoogle} = useFirebase({});
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleSignInWithGoogle = (e) =>{
      e.preventDefault();
      signInWithGoogle()
      .then(() =>{
        navigate(from, { replace: true });
      })
      
    }
    return (
        <div>
      <h3 className="text-center mb-5 mt-3">Please Login</h3>
      <form style={{maxWidth: '400px'}} className=" d-flex flex-column mx-auto">
        <input className="input-group-text text-start" type="email" name="email" id="email" placeholder="Your Email" />
        <br />
        <input className="input-group-text text-start" type="password" name="password" id="password" placeholder="Your Password" />
        <br />
        <input className="input-group-text text-start" type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
        <br />
        <button className="btn btn-primary" type="submit" >Login</button> <br />
        <button onClick={handleSignInWithGoogle} className="btn btn-outline-success"  type="submit">Continue with Google</button>
      </form>
    </div>
    );
};

export default Login;