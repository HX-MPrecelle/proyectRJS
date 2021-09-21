import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ItemList = (props) => {

    return ( 
        <Container>
        <h2 className="posCenter">Todos los productos</h2>
      <Row>
        {props.products.map((element) => (
          <Item key={element.id} item={element} />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;