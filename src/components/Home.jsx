import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { useData } from "../context/DataContext";

const Home = () => {
  const { data, loading, error } = useData();

  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Header />

      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold text-dark">
          ¡Nuestras Especialidades!
        </h2>

        {loading && (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "40vh" }}
          >
            <Spinner animation="grow" variant="danger" />
            <p className="mt-3 fw-bold text-secondary">
              Cargando información de las pizzas...
            </p>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="text-center">
            <Alert.Heading>Algo salió mal</Alert.Heading>
            <p>{error}</p>
          </Alert>
        )}

        {!loading && !error && (
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {data.map((pizza) => (
              <Col key={pizza.id} className="d-flex justify-content-center">
                <CardPizza
                  id={pizza.id}
                  img={pizza.img}
                  name={pizza.name}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
