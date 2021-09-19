import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


const Destacados = ({dataToShow}) => {
    return ( 
        <div>
            {dataToShow.map(element => {
                return (
                    <div>
                        <Container fluid="md">
                        <Row>
                            <Col className="posCardCenter">
                            <Card style={{ width: "20vw" }}>
                                <Card.Img variant="top" src="https://placehold.co/150x150" />
                                <Card.Body key={element.id}>
                                <Card.Title>{element.nombre}</Card.Title>
                                <Card.Text>{element.description}</Card.Text>
                                <Card.Title>${element.precio}</Card.Title>                  
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Destacados;