import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='m-5 text-center'>
            <Link className='mx-5 text-xl border-b-4 border-indigo-500' to='/home'>Home</Link>
            <Link className='mx-5 text-xl border-b-4 border-indigo-500' to='/blog'>Blog</Link>
        </div>
    );
};

export default NavBar;