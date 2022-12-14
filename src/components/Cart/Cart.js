import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
        
    }, []);

    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                products.map(product=><Product key={product.id} product={product}>
                </Product>)
               }
            </div>
            <div className="cart-container">
               <div className='person'>
                <h2>MD: Sabbir Howlader</h2>
                <p>Dhaka, Bangladesh</p>
               </div> <br />
               <div className='weight'>
                <p>75kg <br /> Weight</p>
                <p>6.3 <br /> Height</p>
                <p>25yrs <br /> Age</p>
               </div> <br />
               <h4>Add a breack</h4>
               <div className='second'>
                 <a href="/">10s</a>
                 <a href="/">20s</a>
                 <a href="/">30s</a>
                 <a href="/">40s</a>
                 <a href="/">50s</a>
               </div> <br />
               <h4>Excercise Details</h4>
               <div className='excersice'>
                <p>Excersice time</p>
               </div>
               <div className='breck'>
               <p>Breck time</p>
               </div> <br />
               <button className='btn-submit'>
                <p>Activity Complete</p>
               </button>
            </div>
        </div>
    );
};

export default Cart;