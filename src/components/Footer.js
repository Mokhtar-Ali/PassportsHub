/* eslint-disable react/jsx-no-target-blank */
// import { Link } from "react-router-dom";
import React from 'react';
import '../style/footer.css' 
import { SocialIcon } from 'react-social-icons';

// import Link from 'react-router-dom'


export default function Footer() {
 
    return (
        <div className="footer">
            <div className="footer-li">&copy; 2020 PassportsHub.website</div>
            {/* <ul className="footer-ul"> 
                <li className="footer-li"> */}
            <SocialIcon url="https://www.instagram.com/passportshub/" target="_blank" />
                {/* </li> */}
            <SocialIcon url="https://www.youtube.com/channel/UCJp0XZMq8jPdCcrfdTkLAKw" target="_blank" />
            {/* </ul> */}
        </div>
    );
}

