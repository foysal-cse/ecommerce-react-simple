import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props);
    const {name, stock, price, seller, img, key} = props.product; //Object Destructuring
    return (
        <div className = "product">
            <div className="image">
                <img src={img} alt="images"/>
            </div>

            <div className="product-name">
                <h4><Link to = {"/product/"+key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <p><b>$ {price}</b></p>
                <p>Only <b>{stock}</b> left in Stock - Order soon <span style={{color: "red"}}>❤</span></p>

                {props.showAddToCart && <button 
                className = "cart-btn" 
                onClick = {() => props.add(props.product)}
                > 
                <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;