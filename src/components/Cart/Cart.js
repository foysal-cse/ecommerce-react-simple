import React from 'react';
import './Cart.css'

const Cart = (props) => {

    console.log(props.cart);

    //const total = props.cart.reduce((total, product) => total + product.price, 0)

    let total = 0;
    for(let i = 0; i < props.cart.length; i++){
        const product = props.cart[i];
        total = total + product.price;
    }
    let shipping = 0;

    if(total > 350){
        shipping = 0;
    }
    else if(total > 105){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const {length} = props.cart;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Orderded: {length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;