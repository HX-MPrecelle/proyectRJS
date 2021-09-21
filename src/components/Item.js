import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const Item = (props) => {

    return ( 
        <Col className="posCardCenter">
        <Card style={{ width: "20vw" }}>
          <Card.Img
            variant="top"
            src="https://placehold.co/150x150"
          />
          <Card.Body key={props.item.id}>
            <Card.Title>{props.item.nombre} <Link to={`/item/${props.item.id}`}>Ver más</Link></Card.Title>
            <Card.Text>{props.item.description}</Card.Text>
            <Card.Title>${props.item.precio}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
     );
};
 
export default Item;
