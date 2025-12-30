import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const { user } = useAuth();

    const cartKey = user && user.email
        ? `lenskart-cart:${user.email}`
        : `lenskart-cart:guest`;

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem(cartKey);
        setCartItems(saved ? JSON.parse(saved) : []);
    }, [cartKey]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
}
