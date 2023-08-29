import React, { Fragment, useState } from 'react';
import './nav.css';
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



function Nav({searchbtn}) {
    const [search, setSearch] = useState();
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <Fragment>
            <div className='free'>
                <div className='icon'>
                    <FaTruck />
                </div>
                <p> Free shoping when shopping upto $1000</p>
            </div>
            <div className='main-header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='./img/logo.svg'  alt='logo'></img>
                    </div>
                    <div className='search-box'>
                        <input type='text' value={search} placeholder='Search pruduct...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                        <button onClick={()=> searchbtn(search)}>Search</button>
                    </div>
                    <div className='icon'>
                        {
                            isAuthenticated && 
                            (
                                <div className='account'>
                                    <div className='user-icon'>
                                        <AiOutlineUser />
                                    </div>
                                    <p>User, {user.name} </p>
                                </div>
                            )
                        }
                        <div className='second_icon'>
                            <NavLink to='/' className='link'><AiOutlineHeart /></NavLink>
                            <NavLink to='/cart' className='link'><BsBagCheck /></NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <NavLink to='/' className='link'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/product' className='link'>Pruduct</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className='link'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className='link'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='auth'>
                        {
                            isAuthenticated ?
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                            :
                            <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Nav;
