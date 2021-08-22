//Import ItemListContainer.css
import ItemCount from './ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({text}) => {
    return ( 
        <>
            <h3 className="posH3">{text}</h3>
            <ItemCount stock = {5} initial = {1} onAdd = {(cantidad) => {console.log(cantidad)}}/>
        </>
    );
}
 
export default ItemListContainer;