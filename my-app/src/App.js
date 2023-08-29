import React, { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav';
import Rout from './Rout';
import Footer from './Footer';
import Productdetail from './Productdetail';



function App() {
  // Add Cart
  const [cart, setCart] = useState([]);
  // product Dedail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  
  // filter product
  const [product, setProduct] = useState(Productdetail);
  
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }
  // product detail 
  const view = (product) => {
    setDetail([{ ...product }])
    setClose(true)
  }

  // Add To Cart 
  const addToCart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id
    })
    if (exsit) {
      alert('This Product is already added to cart');
    }
    else {
      setCart([...cart, { ...product, qty: 1 }])
      alert ('Product is added to cart ')
    }
  }
  return (
    <Fragment>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart} />
        <Footer />
      </BrowserRouter>
    </Fragment>
  )
}

export default App

