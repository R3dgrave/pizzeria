import { Container, Row, Col, Button, Image, ListGroup } from 'react-bootstrap';
import { formatCurrency } from "../utils/formatCurrency";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, total, aumentarCantidad, disminuirCantidad } = useCart();

  const dataCart = cart.map((pizza) => (
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
        { dataCart.length > 0 ? dataCart : <p>El carrito está vacío.</p> }
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