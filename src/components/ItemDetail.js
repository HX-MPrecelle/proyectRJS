import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import idImg from '../img/id1.jpeg';
import ItemCount from './ItemCount';
import './generalStyles.css'

const ItemDetail = ({ data }) => {

    return ( 
        <Container fluid="md">
        <Row>
            <Col className="posCardCenter">
            <Card style={{ width: '30vw' }}>
            <Card.Img variant="top" src={idImg} />
                <Card.Body key={data.id}>
                <Card.Title>{data.nombre}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Card.Title>${data.precio}</Card.Title>
                <ItemCount stock={data.stock} initial={1} onAdd={(quantity) => alert(quantity)} />
            </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
     );
}
 
export default ItemDetail;