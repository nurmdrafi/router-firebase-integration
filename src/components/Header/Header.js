import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, handleSignOut} = useFirebase({});
    return (
        <div className='d-flex justify-content-center'>
            <Link to="/" className='text-decoration-none m-3 fw-bold text-black'>Home</Link>
            <Link to="/products" className='text-decoration-none m-3 fw-bold text-black'>Products</Link>
            <Link to="/orders" className='text-decoration-none m-3 fw-bold text-black'>Orders</Link>
            {
                user?.uid ? <button onClick={handleSignOut} className='btn fw-bold text-danger'>Log Out</button> 
                : 
                <div className='my-3'>
                    <Link to="/login" className='text-decoration-none m-3 fw-bold text-success'>Log In</Link>
                    <Link to="/register" className='text-decoration-none m-3 fw-bold text-primary'>Register</Link>
                </div>
            }
            
        </div>
    );
};

export default Header;