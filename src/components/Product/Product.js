import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name, img, time, price, age} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}$</p>
                <p><small>Age: {age} years</small></p>
                <p><small>Time: {time}s</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;