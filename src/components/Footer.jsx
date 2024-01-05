import "./FooterStyles.css";
import { FaInstagram, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#fff', marginRight:"2rem"}}/>
                    <div>
                        <p>Dariyapur, Patna, Bihar</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:'#fff', marginRight:"2rem"}}/>
                        +91-6202-831-563
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:'#fff', marginRight:"2rem"}}/>
                        karn03.ugec20@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About the owner</h4>
                <p>This is me Karn Kumar. I enjoy problem solving on DSA and love to design websites.</p>
                <div className="social">
                    <FaInstagram size={30} style={{color:'#fff', marginRight:"2rem"}}/>
                    <FaTwitter size={30} style={{color:'#fff', marginRight:"2rem"}}/>
                    <FaLinkedin size={30} style={{color:'#fff', marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer