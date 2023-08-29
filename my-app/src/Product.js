import React from 'react';
import Productdetail from './Productdetail';
import './Product.css';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';


function Product({ product, setProduct, detail, view, close, setClose, addToCart }) {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const filtterproduct = (product) => {
        const update = Productdetail.filter((x) => {
            return x.Cat === product 
            
        })
        setProduct(update)
    }
    const Allproducts = () => {
        setProduct(Productdetail)
    }

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
            <div className='products'>
                <h3># Products</h3>
                <p>Home . Products</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <ul>
                                <li onClick={() => Allproducts ()}> <NavLink className='link'>All Products</NavLink> </li>
                                <li onClick={() => filtterproduct ("Tablet")}><NavLink className='link'>Tablet</NavLink></li>
                                <li onClick={() => filtterproduct ("SmartWatch")}><NavLink className='link'>SmartWatch</NavLink></li>
                                <li onClick={() => filtterproduct ("Headphone")}><NavLink className='link'>Headphone</NavLink></li>
                                <li onClick={() => filtterproduct ("Camera")}><NavLink className='link'>Camera</NavLink></li>
                                <li onClick={() => filtterproduct ("Powerbank")}><NavLink className='link'>Powerbank</NavLink></li>
                                <li onClick={() => filtterproduct ("Electronics")}><NavLink className='link'>Electronics</NavLink></li>
                                <li onClick={() => filtterproduct ("Gaming")}><NavLink className='link'>Gaming</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='productbox'>
                        <div className='contant'>
                            {
                                product.map((curElm) => {
                                    return (
                                        <>
                                            <div className='box' kay={curElm.id}>
                                                <div className='img_box'>
                                                    <img src={curElm.Img} alt={curElm.Title} ></img>
                                                    <div className='icon'>
                                                        {
                                                            isAuthenticated ?
                                                            <li onClick={()=> addToCart (curElm)}><AiOutlineShoppingCart /></li>
                                                            :
                                                            <li onClick={()=> loginWithRedirect (curElm)}><AiOutlineShoppingCart /></li>
                                                        }
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
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;
