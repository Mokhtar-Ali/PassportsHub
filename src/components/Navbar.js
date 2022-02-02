/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from "react-router-dom";
import '../style/navbar.css' 
// import Link from 'react-router-dom'


export default function NavBar() {
 
    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'> 
            {/* <div className='space-1'></div> */}
                {/* <div > */}
                    <ul className='toolbar_navigation-items' >
                        <li ><Link className='navbar-li' to='/' > PassportsHub </Link></li>
                        <li ><Link className='navbar-li' to='/about'> About</Link></li>
                        <li ><Link className='navbar-li' to='/about'> Portfolio</Link></li>
                    </ul>
                {/* </div> */}
                {/* <div className='space-2'></div> */}
            </nav>
        </header>
    );
}

