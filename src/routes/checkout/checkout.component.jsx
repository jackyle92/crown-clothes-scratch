import './checkout.styles.scss'
import {useContext, useEffect, useState} from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import {CartContext} from "../../contexts/cart.context.jsx";


const Checkout = () => {

    const {cartItems} = useContext(CartContext)
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        const totalPrice = cartItems.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity);
        }, 0);
        setCartTotal(totalPrice);
    }, [cartItems])

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                return (
                   <CheckoutItem key={cartItem.id} cartItem={cartItem} ></CheckoutItem>
                )
            })}
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    )
}

export default Checkout;