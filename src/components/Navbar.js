/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../style/navbar.css' 
// import Link from 'react-router-dom'


export default function NavBar() {
 
    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'> 
            {/* <div className='space-1'></div> */}
                {/* <div > */}
                    <ul className='toolbar_navigation-items' >
                        <li ><a className='navbar-li' href='/' > PassportsHub </a></li>
                        <li ><a className='navbar-li' href='/about'> About Me</a></li>
                        {/* <li ><a className='navbar-li' href='/about' style={{'marginLeft':'100px'}}> FaceBook </a></li> */}
                        {/* <li ><a className='navbar-li' href='https://www.instagram.com/passportshub/' target='_blank'> Instagram </a></li> */}
                        
                    </ul>
                {/* </div> */}
                {/* <div className='space-2'></div> */}
            </nav>
        </header>
    );
}

