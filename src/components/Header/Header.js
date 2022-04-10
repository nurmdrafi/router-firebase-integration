import React from 'react';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';

import { getAuth, signOut  } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Header = () => {
    // const {user, handleSignOut} = useFirebase({});
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center my-2' style={{height: '80px'}}>
            <Link to="/" className='text-decoration-none m-3 fw-bold text-black'>Home</Link>
            <Link to="/products" className='text-decoration-none m-3 fw-bold text-black'>Products</Link>
            <Link to="/orders" className='text-decoration-none m-3 fw-bold text-black'>Orders</Link>
           {/* User Name / User Picture / Log In / Register */}
            <div className='ms-auto'>
            <span className='fw-bold text-black'>{user?.displayName && user.displayName}</span>
            <img src={user?.photoURL} alt="" className='mx-3' style={{width: '50px', borderRadius: '50px'}}/>
            {
                user?.uid ? <button onClick={handleSignOut} className='btn fw-bold text-danger'>Log Out</button> 
                : 
                <span>
                    <Link to="/login" className='text-decoration-none mx-3 fw-bold text-success'>Log In</Link>
                    <Link to="/register" className='text-decoration-none mx-3 fw-bold text-primary'>Register</Link>
                </span>
            }
            </div>
            
        </div>
    );
};

export default Header;