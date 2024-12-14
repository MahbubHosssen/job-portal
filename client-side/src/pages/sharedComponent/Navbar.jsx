import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import logo from '../../assets/logo.PNG'
import { motion } from "motion/react"

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const signOut = () => {
        signOutUser()
            .then(() => {
                console.log('signOut success')
            })
            .catch(() => console.log('signOut unsuccess'))
    }

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/jobs'>Jobs</Link></li>
    </>

    return (
        <div className='w-full bg-red-300'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold text-blue-900"><img src={logo} alt="" /> Job Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    {
                        user ?

                            <button onClick={signOut} className='btn bg-blue-500 text-white'>Sign Out</button>

                            :
                            <div className='space-x-3 flex items-center'>
                                
                                    <Link to='/register' className='hover:mt-[-7px] transition-all'>
                                        <button 
                                        initial={{y: 0}}
                                        whileHover={{y: [-10]}}
                                        transition={{duration:0.3}}
                                        className='border-b transition-all border-blue-900 text-blue-900'>Register</button>
                                    </Link>
                                
                                <Link to='/signIn'>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 400, dumping: 5 }}
                                        className='btn hover:bg-blue-500  bg-blue-500 text-white'>Sign In</motion.button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;