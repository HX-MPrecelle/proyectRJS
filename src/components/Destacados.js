import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


const Destacados = ({ dataToShow }) => {
    return (
      <>
        <Container fluid="md">
            <h2 className="posCenter">Destacados</h2>
          <Row>
            {dataToShow.map((element) => {
              return (
                <>
                  <Col className="posCardCenter">
                    <Card style={{ width: "20vw" }}>
                      <Card.Img
                        variant="top"
                        src="https://placehold.co/150x150"
                      />
                      <Card.Body key={element.id}>
                        <Card.Title>{element.nombre}</Card.Title>
                        <Card.Text>{element.description}</Card.Text>
                        <Card.Title>${element.precio}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </>
    );
};

  export default Destacados;