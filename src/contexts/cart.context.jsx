import {createContext, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
    if(existingCartItem) {
        return cartItems.map(item =>
            item.id === productToAdd.id
                ? {...item, quantity: item.quantity + 1}
                : item
        );
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    setCartItems: () => {},
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    let [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const clearItemFromCart =(cartItem) => {
        setCartItems(cartItems.filter((item) => {
            return item.id !== cartItem.id;
        }))
    }
    const removeItemToCart = (cartItem) => {
        setCartItems(cartItems.map((item)=> {
                if(item.id === cartItem.id) {
                    item.quantity++;
                }
                return item;
            })
        )
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        setCartItems,
        clearItemFromCart,
        removeItemToCart
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}