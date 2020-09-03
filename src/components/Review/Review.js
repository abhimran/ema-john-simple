import React, {useState, useEffect} from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder = ()=>{
        setCart([])
        setOrderPlace(true)
        processOrder()
    }
    const removeCLick = (key) => {
       const newCart = cart.filter(pd=> pd.key !== key);
       setCart(newCart);
       removeFromDatabaseCart(key);
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd=> pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProduct);
    }, [])

   let thankyou;
   if (orderPlace) {
        thankyou = <img src={happyImg} alt=""/>
   }

    return (
        <div>
             <div className="product-container">
                {
                cart.map(item => <Reviewitem item={item} key={item.key} removeCLick={removeCLick}></Reviewitem>)
                }
                {thankyou}
            </div>
            
            <div className="shopcontainer">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
