import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [hidden, setHidden] = React.useState("hidden")

    // navbar style for hidden
    const visibility = () =>{
        if(hidden){
            setHidden("")
        } else{
            setHidden("hidden")
        }
    }

    return (
        
    <nav className="bg-white shadow dark:bg-gray-800">
    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
            <div>
                <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Atoshi Solutions</a>
            </div>
            
            {/* <!-- Mobile menu button --> */}
            <div className="flex md:hidden">
                <button type="button" onClick={()=> visibility()} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
            </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className="items-center md:flex">
            <div className= {` ${hidden} flex md:block flex-col md:flex-row md:mx-6`}>
                <Link className="my-1 font-medium text-lg text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/home">Home</Link>
                <Link className="my-1 font-medium text-lg text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/about">About</Link>
                <Link className="my-1 font-medium text-lg text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/blog">Blog</Link>
                <Link className="my-1 font-medium text-lg text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/contact">Contact</Link>
            </div>
        </div>
    </div>
</nav>

        // <div className='text-center pt-10'>
        //     <Link className='m-5 text-xl hover:border-b-4 border-indigo-500' to='/home'>Home</Link>
        //     <Link className='m-5 text-xl hover:border-b-4 border-indigo-500' to='/blog'>Blog</Link>
        //     <Link className='m-5 text-xl hover:border-b-4 border-indigo-500' to='/contact'>Contact</Link>
        // </div>
    );
};

export default NavBar;