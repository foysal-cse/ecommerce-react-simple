import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {name, stock, price, seller, img} = props.product; //Object Destructuring
    return (
        <div className = "product">
            <div className="image">
                <img src={img} alt="images"/>
            </div>

            <div className="item">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><b>$ {price}</b></p>
                <p>Only <b>{stock}</b> left in Stock - Order soon <span style={{color: "red"}}>❤</span></p>
                <button 
                className = "cart-btn" 
                onClick = {() => props.add(props.product)}
                > 
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;