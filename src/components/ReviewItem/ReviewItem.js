import React from 'react';

const ReviewItem = (props) => {

    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    };

    const {price, name, quantity, key} = props.product;
    return (
        <div style={reviewItemStyle}>
            <h4 className = "product-name">{name}</h4>
            <p>$ {price}</p>
            <h4>{quantity}</h4>
            <br/>
            <button onClick = {() => {props.removeProduct(key)}} className = "cart-btn">Remove Item</button>
        </div>
    );
};

export default ReviewItem;