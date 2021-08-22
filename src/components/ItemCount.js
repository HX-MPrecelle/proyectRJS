import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    let [contador, setContador] = useState(initial)
    

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
    }



    return ( 
        <div>
            <div className="justify-content-md-center posCount">
            <button className="sepCount" onClick={restar}>-</button>
            <p className="sepCount">{contador}</p>
            <button className="sepCount" onClick={sumar}>+</button>
            </div>
            <div className="posAgregar">
                <button disabled={stock > 0 ? false : true} onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>    
     );
}
 
export default ItemCount;