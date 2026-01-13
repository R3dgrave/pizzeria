import { useState } from "react";
import { Container, Row, Col, Button, Image, ListGroup } from 'react-bootstrap';
import { formatCurrency } from "../utils/formatCurrency";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [pizzas, setPizzas] = useState(pizzaCart);
  const total = pizzas.reduce((acc, pizza) => acc + (pizza.price * pizza.count), 0);

  const aumentarCantidad = (id) => {
    const nuevosItems = pizzas.map(pizza => pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza);
    setPizzas(nuevosItems);
  };

  const disminuirCantidad = (id) => {
    const nuevosItems = pizzas.map(pizza =>
      pizza.id === id ? { ...pizza, count: Math.max(0, pizza.count - 1) } : pizza
    );//.filter(pizza => pizza.count > 0);

    setPizzas(nuevosItems);
  };

  const dataCart = pizzas.map((pizza) => (
    <ListGroup.Item key={pizza.id} className="py-3">
      <Row className="align-items-center">
        <Col xs={3} md={2}>
          <Image src={pizza.img} alt={pizza.name} fluid rounded />
        </Col>

        <Col xs={4} md={5}>
          <h5 className="mb-0 text-capitalize">{pizza.name}</h5>
        </Col>

        <Col xs={5} md={5} className="d-flex align-items-center justify-content-end">
          <p className="mb-0 me-3 fw-bold">{formatCurrency(pizza.price * pizza.count)}</p>
          <Button variant="outline-danger" size="sm" onClick={() => disminuirCantidad(pizza.id)}>-</Button>
          <span className="mx-3 fw-bold">{pizza.count}</span>
          <Button variant="outline-primary" size="sm" onClick={() => aumentarCantidad(pizza.id)}>+</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  ));

  return (
    <Container className="mt-5 p-4 border rounded bg-light">
      <h2 className="mb-4">Detalles del pedido:</h2>

      <ListGroup variant="flush" className="mb-4">
        {dataCart}
      </ListGroup>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h3 className="fw-bold">Total: {formatCurrency(total)}</h3>
        <Button variant="dark" size="lg">
          Pagar
        </Button>
      </div>
    </Container>
  );
};

export default Cart;