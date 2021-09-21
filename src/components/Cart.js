import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'; 
import { CartContext } from "../context/CartContext";

const Cart = () => {
    
    const {cart, removeItem, clear, totalPrice} = useContext(CartContext)
    
    return ( 
        <div className="posCenter">
            <span>${totalPrice()}</span>
            {cart.lenght === 0 ? (
                <>
                <p>No hay items</p>
                <Link to="/">
                    <Button variant="outline-secondary">Volver al inicio</Button>
                </Link>
                </>
            ) : (
                cart.map((element) => {
                    return (
                        <>
                        <h1>{element.item.nombre}</h1>
                        <Button variant="outline-secondary" onClick={() => removeItem(element.item.id)}>Borrar</Button>
                        </>
                    )
                })
            )}
            <Button variant="outline-secondary" onClick={clear}>Borrar todo</Button>
        </div>
     );
}
 
export default Cart;