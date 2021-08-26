import Item from './Item'

const ItemList = (props) => {

    return ( 
            <ul>
                {props.products.map(element => <Item key={element.id} item={element} />)}
            </ul>    
    );
}
 
export default ItemList;