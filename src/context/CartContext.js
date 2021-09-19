import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart([...cart, {item, quantity}]);
        } else {
            const updateCart = [...cart];
        
            updateCart.forEach((element) => {
                if (element.item.id === item.id) {
                    element.quantity += quantity;
                }
            });
            setCart(updateCart);
        }
    };
    
    const isInCart = (id) => cart.find((element) => element.item.id === id);

    const removeItem = (id) => {
        const filtrado = cart.filter((element) => element.item.id !== id);
        setCart(filtrado);
    };

    const clear = () => setCart([]);

    console.log("Carrito de compras", cart);

    const totalPrice = () => {
        return cart.reduce((acc, element) => (acc += element.item.price * element.quantity), 0);
    };


    const itemCount = () => {
        return cart.reduce((acc, item) => (acc += item.quantity), 0);
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cart, itemCount, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}