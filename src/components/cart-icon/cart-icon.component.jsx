import ShoppingIcon from '../../assets/shopping-bag.svg?react'
import './cart-icon.styles.scss'
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../contexts/cart.context.jsx";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext);
    const [itemCount, setItemCount] = useState(0);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0);
        setItemCount(newCartCount);
    }, [cartItems])

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

export default CartIcon;