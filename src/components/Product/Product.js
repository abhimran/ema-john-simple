import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-list">
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>By: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} Left in stock- Order now</small></p>
                <button className="add-to-cart" onClick={()=>props.handleClick(props.product)}>  <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;