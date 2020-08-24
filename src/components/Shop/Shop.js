import React, {useState} from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10= fakeData.slice(0, 10);
    const [product] = useState(first10);
    const [cart, setCart] = useState([])
    

    const handleClick =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart)
        
    }
    return (
        <div className="Shop-Container">
            <div className="product-container">
                {
                    product.map(product=><Product product={product} key={product.key} handleClick={handleClick}></Product>)
                }
            </div>
            <div className="shopcontainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;