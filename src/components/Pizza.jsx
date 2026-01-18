import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Badge, Spinner, Alert } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { formatCurrency } from "../utils/formatCurrency";
import { GiFullPizza } from "react-icons/gi";

const Pizza = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      if (!response.ok) {
        throw new Error("Ocurrio un error y no se pudo obtener la información de la pizza, intente nuevamente.");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="danger" />
        <p className="mt-3">Cargando detalles de la pizza...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">Error al cargar la información, recargue la pagina</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0 overflow-hidden">
        <Row className="g-0">
          <Col md={6}>
            <Card.Img
              src={data.img}
              alt={data.name}
              style={{ height: "100%", objectFit: "cover", minHeight: "400px" }}
            />
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center p-4">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Card.Title as="h1" className="text-capitalize text-danger mb-0">
                  {data.name}
                </Card.Title>
                <Badge bg="success" className="fs-5">
                  {formatCurrency(data.price)}
                </Badge>
              </div>

              <Card.Text className="text-muted fs-5 mb-4">
                {data.desc}
              </Card.Text>

              <h5 className="fw-bold mb-3">Ingredientes:</h5>
              <ListGroup variant="flush" className="mb-4">
                <Row xs={1} sm={2}>
                  {data.ingredients?.map((ing, index) => (
                    <Col key={index}>
                      <ListGroup.Item className="border-0 px-0">
                        <GiFullPizza /> <span className="text-capitalize">{ing}</span>
                      </ListGroup.Item>
                    </Col>
                  ))}
                </Row>
              </ListGroup>

              <div className="d-grid">
                <Button variant="dark" size="lg" className="d-flex align-items-center justify-content-center gap-2">
                  <FaCartPlus /> Añadir al Carrito
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Pizza;