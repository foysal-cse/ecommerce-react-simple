import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {

    const getFirst10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(getFirst10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, []);

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        //console.log("Product Added", product);

        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className = "twin-container">

            <div className="product-container">
                {
                    products.map(p => <Product
                        key={p.key} 
                        showAddToCart = {true}
                        add = {handleAddProduct}
                        product = {p}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}>
                    <Link to = "/review">
                    <button className = "cart-btn">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;