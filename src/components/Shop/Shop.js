import React, {useState} from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Shop = () => {
    const first10= fakeData.slice(0, 10);
    const [product] = useState(first10);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const prevCart = productKey.map(existingKey =>{
            const product = fakeData.find(pd=> pd.key ===existingKey);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(prevCart)
    },[])
    

    const handleClick =(product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd=> pd.key === toBeAddedKey);
        console.log(sameProduct);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=> pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]
        }else{
            product.quantity =1;
            newCart = [...cart, product];
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="Shop-Container">
            <div className="product-container">
                {
                    product.map(product=><Product product={product} key={product.key} handleClick={handleClick}></Product>)
                }
            </div>
            <div className="shopcontainer">
                <Cart cart={cart}>
                    <Link to="/review">
                         <button>Review Your Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;