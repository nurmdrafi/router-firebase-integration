import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Link to="/" className='text-decoration-none m-3 fw-bold text-black'>Home</Link>
            <Link to="/products" className='text-decoration-none m-3 fw-bold text-black'>Products</Link>
            <Link to="/orders" className='text-decoration-none m-3 fw-bold text-black'>Orders</Link>
            <Link to="/register" className='text-decoration-none m-3 fw-bold text-black'>Register</Link>
            <Link to="/login" className='text-decoration-none m-3 fw-bold text-black'>Login</Link>
        </div>
    );
};

export default Header;