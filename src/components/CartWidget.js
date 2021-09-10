import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart" className="decoBrand"><i className="material-icons">shopping_cart</i></Link>
    )
}

export default CartWidget;