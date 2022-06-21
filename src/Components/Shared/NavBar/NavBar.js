import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='text-center pt-10'>
            <Link className='m-5 text-xl hover:border-b-4 border-indigo-500' to='/home'>Home</Link>
            <Link className='m-5 text-xl hover:border-b-4 border-indigo-500' to='/blog'>Blog</Link>
            <Link className='m-5 text-xl hover:border-b-4 border-indigo-500' to='/contact'>Contact</Link>
        </div>
    );
};

export default NavBar;