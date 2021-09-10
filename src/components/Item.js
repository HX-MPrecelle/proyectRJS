import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Item = (props) => {

    return ( 
        <ListGroup>
            <ListGroup.Item key={props.item.id}>{props.item.nombre}<Link to={`/item/${props.item.id}`}>Ver más</Link></ListGroup.Item>
        </ListGroup>
     );
}
 
export default Item;
