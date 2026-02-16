import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useUser } from "../context/UserContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { registerFetch } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      alert("Por favor, complete todos los campos");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Los passwords no coinciden");
      return;
    }

    registerFetch(email, password);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="mt-5 vh-100">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Formulario de Registro</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduce tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formConfirmPassword">
                <Form.Label>Confirmar Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repite tu contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Registrarse
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
