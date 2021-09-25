import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const {itemCount} = useContext(CartContext)

    return (
        <Link to="/cart" className="decoBrand"><i className="material-icons">shopping_cart</i>{itemCount()}</Link>
    )
}

export default CartWidget;