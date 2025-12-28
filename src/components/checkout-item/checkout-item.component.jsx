import './checkout-item.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context.jsx";

import RemoveIcon from '../../assets/remove-button-svgrepo-com.svg?react'

const CheckoutItem = ({cartItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;

    const {addItemToCart, clearItemFromCart, removeItemToCart} = useContext(CartContext);
    const deleteCartItem = () => clearItemFromCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <div className='name'>
                <span>{name}</span>
            </div>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                  &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                  &#10095;
                </div>
              </span>
            <div className='price'>
                <span>{price}</span>
            </div>
            <div className='remove-button logo-container'>
                <RemoveIcon onClick={deleteCartItem}></RemoveIcon>
            </div>
        </div>
    )
}

export default CheckoutItem;