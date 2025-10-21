import React from 'react';
import { Link, NavLink } from 'react-router';
import { SlSocialGithub } from "react-icons/sl";
import logoImg from '../assets/logoo.png'


const Navbar = () => {
    return (
        <div className="navbar bg-white px-2.5 md:px-[80px] mb-[80px] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/app'}>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/install'}>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={'/'} className='flex items-center' ><img className='h-[30px] w-[30px] md:h-[60px] md:w-[50px]' 
                src={logoImg} alt=""/><span className='font-extrabold text-fuchsia-700 text-xl md:text-2xl'>
                <span className='text-[#632EE3]'>App</span>Orbit</span></Link> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-semibold menu-horizontal px-1">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/app'}>Apps</NavLink>
                    </li>
                    <li className='font'>
                        <NavLink to={'/install'}>Installation</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'https://github.com/ASIK-0'} className="btn px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg"> <SlSocialGithub /> Contribute</Link>
            </div>
        </div>
    );
};

export default Navbar;