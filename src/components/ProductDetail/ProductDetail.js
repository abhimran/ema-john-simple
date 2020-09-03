import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    let { productkey } = useParams();
    const products = fakeData.find(product => product.key === productkey);
    const {img, name, price, seller, star, starCount, stock,category} = products;
    console.log(products);
    return (
        <div className="productDetail">
            <h1 style={{textAlign: 'center'}}>Product Detail </h1>
           <img src={img} alt=""/>
            <h3 className="category">{category}</h3>
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p>Star: {star}</p>
            <p>StarCount: {starCount}</p>
            <p>OnStock: {stock}</p>
        </div>
    );
};

export default ProductDetail;