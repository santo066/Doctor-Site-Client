import logo from '../../../src/assets/logo.png'

import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

export default function Header() {

    const { user, logOut } = useContext(AuthContext)

    const hendelLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const header_link = (
        <>
            <li><a href="/" className="md:text-white text-black hover:text-accent-peach transition-colors text-2xl md:text-[18px]">Home</a></li>
            <li><a href="#" className="md:text-white text-black hover:text-accent-peach transition-colors text-2xl md:text-[18px]">About</a></li>
            <li><a href="#" className="md:text-white text-black hover:text-accent-peach transition-colors text-2xl md:text-[18px]">Appointment</a></li>
            {
                user ?
                    <li><a onClick={hendelLogout} href="/" className="md:text-white text-black hover:text-accent-peach transition-colors text-2xl md:text-[18px]">Sign Out</a></li>
                    :
                    <li><a href="/signUp" className="md:text-white text-black hover:text-accent-peach transition-colors text-2xl md:text-[18px]">Login</a></li>
            }
        </>
    );

    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-[#07332F]">
            <div className="navbar container mx-auto px-4 lg:px-10 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="xl:hidden menu menu-sm dropdown-content bg-white -ml-5 w-screen h-screen flex items-center justify-center flex-col mt-3 z-1 gap-5 p-2 shadow bg-dark-green rounded-box text-white">
                            {header_link}
                        </ul>
                    </div>
                    <a href='#' className="">
                        <img src={logo} alt="Logo" className=" md:w-48" />
                    </a>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 font-medium">
                        {header_link}
                    </ul>
                </div>
            </div>
        </header>
    );
}