import React from 'react';
import '../style/navbar.css' 
// import Link from 'react-router-dom'


export default function NavBar() {
 
    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'> 
            <div className='space-1'></div>
                <div className='toolbar_navigation-items'>
                    <ul >
                        <li ><a className='navbar-li' href='/' > Home </a></li>
                        <li ><a className='navbar-li' href='/about'> About </a></li>
                        <li ><a className='navbar-li' href='/about' style={{'marginLeft':'100px'}}> FaceBook </a></li>
                        <li ><a className='navbar-li' href='https://www.instagram.com/mokhtar.egypt/' target='_blank'> Instgram </a></li>
                        
                    </ul>
                </div>
                <div className='space-2'></div>
            </nav>
        </header>
    );
}

