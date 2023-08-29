import React from 'react';
import './Footer.css';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='about'>
                        <div className='logo'>
                            <img src='./img/logo.svg' alt='Logo'></img>
                        </div>
                        <div className='detail'>
                            <p>we are a team of designers and developers thet create heigh quality</p>
                            <div className='icon'>
                                <li><BiLogoFacebook /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><AiFillYoutube /></li>
                            </div>
                        </div>
                    </div>
                    <div className='account'>
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shipping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className='page'>
                        <h3>Pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Cart</li>
                            <li>Contact</li>
                            <li>Terma & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
