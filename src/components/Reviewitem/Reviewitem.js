import React from 'react';

const Reviewitem = (props) => {
    const {name, quantity, img, key, price} = props.item;
    const reviewStyle = {
        padding: '10px',
        borderBottom: '2px solid gray'
    }
    return (
        <div style={reviewStyle}>
            <img src={img} alt=""/>
            <h4>Name: {name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
            <button onClick={()=> props.removeCLick(key)}>Remove Item</button>
        </div>
    );
};

export default Reviewitem;