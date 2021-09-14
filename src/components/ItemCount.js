import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    let [contador, setContador] = useState(initial)
    
    const [terminar, setTerminar] = useState(false)

    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }

    const agregar = () => {
        if(stock > 0)
        onAdd(contador)
        setTerminar(true)
    }



    return ( 
        <>
            <div className="justify-content-md-center posCount">
            <Button variant="outline-secondary" className="sepCount" onClick={restar}>-</Button>
            <p className="sepCount">{contador}</p>
            <Button variant="outline-secondary" className="sepCount" onClick={sumar}>+</Button>
            </div>

            { !terminar ?
            <div className="posAgregar">
                <Button variant="outline-secondary" disabled={stock > 0 ? false : true} onClick={agregar}>Agregar al carrito</Button>
            </div>
            :
            <div className="posAgregar">
                <Link to="/cart">
                    <Button variant="outline-secondary">Ver carrito</Button>
                </Link>
            </div>
            }
        </>    
     );
}
 
export default ItemCount;