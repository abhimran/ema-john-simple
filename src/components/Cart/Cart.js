import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, element)=>total+element.price, 0);

    let shipping = 0;
    if (total > 35){
        shipping+= 0;
    }else if(total > 15){
        shipping+=4.99;
    }else if(total > 0){
        shipping+= 12.99;
    }
    const tax = (total/12).toFixed(2);
    const subtotal = total + shipping+Number(tax);

    return (
        <div className="cart-text">
            <h1>Order Summery</h1>
            <h4>Items Ordered: {cart.length}</h4>
            <h5>Items: </h5>
            <h5>Shipping: ${shipping}</h5>
            <h5>Total Before Tax: ${Math.round(total + shipping)} </h5>
            <h5>Tax: ${tax} </h5>
            <h2>Order Total:${subtotal.toFixed(2)} </h2>
            <button>Review Your Order</button>
        </div>
    );
};

export default Cart;