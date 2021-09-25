import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './generalStyles.css'

const ItemDetail = ({ data }) => {

    const {addItem} = useContext(CartContext);
    const [terminar, setTerminar] = useState(false);
    const onAdd = (quantity) => {
        alert(quantity);
        addItem(data, quantity);
        setTerminar(true);
    };
    
    return (
        <Container fluid="md">
          <Row>
            <Col className="posCenter">
              <Card style={{ width: "20vw" }}>
                <Card.Img variant="top" src={data.imageUrl} />
                <Card.Body key={data.id}>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Card.Title>${data.price}</Card.Title>
                  {!terminar ? (
                    <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
                  ) : (
                    <div className="posCenter">
                      <Link to="/cart">
                        <Button variant="outline-secondary">Ver carrito</Button>
                      </Link>
                    </div>
                  )}
                  <div className="posCenter">
                    <Link to="/">
                        <Button variant="outline-secondary">Volver al inicio</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
};

export default ItemDetail;