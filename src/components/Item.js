import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text>{props.item.description}</Card.Text>
            <Card.Title>${props.item.price}</Card.Title>
            <div className="posCenter">
            <Link to={`/item/${props.item.id}`}>
              <Button variant="outline-secondary">Ver más</Button>
            </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
     );
};
 
export default Item;
