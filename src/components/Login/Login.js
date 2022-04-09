import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase({})
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
        <button onClick={signInWithGoogle} className="btn btn-outline-success" type="submit" >Continue with Google</button>
      </form>
    </div>
    );
};

export default Login;