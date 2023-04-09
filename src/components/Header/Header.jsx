import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
           <div className='bg-slate-400  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 grid grid-cols-3 justify-between items-center'>
           <div>
            <h2 className='text-xl font-semibold'>CareerScope</h2>
            </div>
            <div className='nav'>
                <Link>Home</Link>
                <Link>Statistics</Link>
                <Link>Applied Jobs</Link>
                <Link>Blog</Link>
            </div>
            <div>
                <button className='btn-primary'>Star Applying</button>
            </div>
           </div>
           <div>
            <h1 className='text-5xl mt-4 font-semibold'>One Step <br /> Closer To Your <br /> Dream Job</h1>
           </div>
        </div>
    );
};

export default Header;