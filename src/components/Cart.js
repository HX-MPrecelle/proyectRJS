import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'; 
import { CartContext } from "../context/CartContext";

const Cart = () => {
    
    const {cart, removeItem, clear, totalPrice} = useContext(CartContext)
    
    return ( 
        <div className="posCenter">
            {cart.length === 0 ? (
                <div className="posCenter">
                    <h3>No hay items en el carrito</h3>
                    <Link to="/">
                        <Button variant="outline-secondary">Volver al inicio</Button>
                    </Link>
                </div>
            ) : (
                cart.map((element) => {
                    return (
                        <div className="posCenter">
                            <h5>{element.quantity}</h5>
                            <h5 className="sepPrice">{element.item.nombre}</h5>
                            <h5>${totalPrice()}</h5>
                            <Button className="sepBut" variant="outline-secondary" onClick={() => removeItem(element.item.id)}>Borrar</Button>

                            <div className="posCenter">
                                <Button variant="outline-secondary" onClick={clear}>Borrar todo</Button>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
     );
}
 
export default Cart;