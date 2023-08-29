import React, { useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { BsArrowRight, BsCurrencyDollar } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';
import { CiPercent } from 'react-icons/ci';
import { ImHeadphones } from 'react-icons/im';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import Homeproduct from './Homeproduct';

function Home({detail, view, close, setClose, addToCart}) {
    const [homeproduct, setHomeproduct] = useState(Homeproduct);
    return (
        <>
            {
                close ?
                <div className='product-detail'>
                    <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                        {
                            detail.map((curElm) => {
                                return (
                                    <div className='productbox'>
                                        <div className='img-box'>
                                            <img src={curElm.Img} alt={curElm.Title}></img>
                                        </div>
                                        <div className='detail'>
                                            <h4>{curElm.Cat}</h4>
                                            <h2>{curElm.Title}</h2>
                                            <p>A Screen Everyone Will Love: Whether your Family is state...</p>
                                            <h3>${curElm.Price}</h3>
                                            <button>Add to cart</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> : null
            }
            <div className='top_banner'>
                <div className='container'>
                    <div className='detali'>
                        <h2>The Best Note Book Coll 2023 </h2>
                        <NavLink to='/product' className='link'>Shop Now <span><BsArrowRight /></span></NavLink>
                    </div>
                    <div className='img_box'>
                        <img src='./img/slider-img.png' alt='SliderImg'></img>
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/Mobile Phone.png' alt='MobilPhone'></img>
                        </div>
                        <div className='detail'>
                            <p>23 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/headphone.png' alt='headphone'></img>
                        </div>
                        <div className='detail'>
                            <p>52 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/cpu heat.jpg' alt='cpuhead'></img>
                        </div>
                        <div className='detail'>
                            <p>44 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src='./img/smart watch.png' alt='smartwatck'></img>
                        </div>
                        <div className='detail'>
                            <p>37 products</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start About */}
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FaTruck />
                        </div>
                        <div className='detail'>
                            <h3> Free Shipping</h3>
                            <p>Order above $1000</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsCurrencyDollar />
                        </div>
                        <div className='detail'>
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaurenty</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <CiPercent />
                        </div>
                        <div className='detail'>
                            <h3>Membern Discount</h3>
                            <p>On every Oder</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <ImHeadphones />
                        </div>
                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>Every time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Prudect */}
            <div className='product'>
                <h2>Top Prudect</h2>
                <div className='container'>
                    {
                        homeproduct.map((curElm) => {
                            return (
                                <div className='box' kay={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title} ></img>
                                        <div className='icon'>
                                            <li onClick={()=> addToCart (curElm)}><AiOutlineShoppingCart /></li>
                                            <li onClick={()=> view (curElm)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>${curElm.Price}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* Start banner */}
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>latest technology added</h4>
                        <h3>apple ipad 10.2 9th gen -2023</h3>
                        <p> $986</p>
                        <NavLink to='/product' className='link'>Show Now <BsArrowRight/></NavLink>
                    </div>
                    <div className='img-box'>
                        <img src="./img/slider-img.png"></img>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Home;
