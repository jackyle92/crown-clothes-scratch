import {Link} from "react-router-dom";
import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context.jsx";

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const navigateToCheckout = () => {

    }
    const {cartItems} = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => {
                    return <CartItem key={item.id} cartItem={item}></CartItem>
                })}
            </div>
            <Link to='/checkout' >
                <Button onClick={navigateToCheckout}>Go to checkout</Button>
            </Link>

        </div>
    )
}

export default CartDropdown;