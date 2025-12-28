import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CrwnLogo from '../../assets/crown.svg?react';
import './navigation.style.scss'
import {UserContext} from "../../contexts/user.context.jsx";
import {CartContext} from "../../contexts/cart.context.jsx";
import {signOutUser} from "../../utils/firebase/firebase.utils.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutUserHandler = async () => {
        await signOutUser();
    }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUserHandler}>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon></CartIcon>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;