import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { Link, NavLink } from 'react-router';
import logoimg from '../../assets/image/logo.png'
import MyNavLink from '../MyNavlink/MyNavLink';


const Navbar = () => {
    const navItems = [
         {
            path :"/homepage",
            text :"Home",
         },
           {
            path :"/apps",
            text :"All Apps",
         },
           {
            path :"/installed",
            text :"Install Apps",
         },
    ]
    return (
        <div className='bg-base-100 shadow-sm'>

            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to={"/homepage"}>Home</Link></li>
                            <li><Link to={"/apps"}>All Apps</Link></li>
                            <li><Link to={"/installed"}>Install Apps</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={logoimg} alt="" height={60} width={60} />
                        <a href="" className='text-xl font-semibold text-purple-500'>HERO.IO</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold gap-3">

                        {
                            navItems.map((item)=>(<MyNavLink to={item.path}>{item.text}</MyNavLink>))
                        }

                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-purple-500 text-white"><IoLogoGithub />
                        Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;