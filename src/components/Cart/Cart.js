import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, element)=>total+element.price * element.quantity, 0);

    const tax = (total/12).toFixed(2);
    const subtotal = total +Number(tax);

    return (
        <div className="cart-text">
            <h1>Order Summery</h1>
            <h4>Items Ordered: {cart.length}</h4>
            <h5>Total Before Tax: ${Math.round(total)} </h5>
            <h5>Tax: ${tax} </h5>
            <h2>Order Total:${subtotal.toFixed(2)} </h2>
            {
                props.children
            }
        </div>
    );
};

export default Cart;