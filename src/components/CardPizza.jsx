import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { FaEye, FaCartShopping } from "react-icons/fa6";
import { formatCurrency } from "../utils/formatCurrency";
import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, img, name, ingredients, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({id, img, name, ingredients, price});
  }

  return (
    <Card
      className="h-100 shadow-sm"
      style={{ width: "100%", maxWidth: "400px", border: "none" }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column text-center">
        <Card.Title className="text-danger fw-bold fs-3 text-capitalize">
          {name}
        </Card.Title>

        <hr />

        <Card.Text className="text-start mb-1 fw-bold">Ingredientes:</Card.Text>
        <ListGroup variant="flush" className="text-start mb-3">
          {ingredients.map((ing, index) => (
            <ListGroup.Item key={index} className="border-0 p-1 text-muted">
              <GiFullPizza /> {ing}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Card.Text className="fs-2 fw-bold text-success mt-auto">
          {formatCurrency(price)}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="w-full d-flex justify-content-between bg-white border-top-0 pb-4">
        <Button
          as={Link}
          to={`/pizza/${id}`}
          variant="outline-primary"
          size="sm"
          className="d-flex align-items-center gap-1"
        >
          <FaEye /> Ver más
        </Button>
        <Button
          variant="success"
          size="sm"
          className="d-flex align-items-center gap-1"
          onClick={handleAddToCart}
        >
          <FaCartShopping /> Añadir
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardPizza;
