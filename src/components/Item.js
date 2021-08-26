import ListGroup from 'react-bootstrap/ListGroup';

const Item = (props) => {

    return ( 
        <ListGroup>
            <ListGroup.Item key={props.item.id}>{props.item.nombre}</ListGroup.Item>
        </ListGroup>
     );
}
 
export default Item;
