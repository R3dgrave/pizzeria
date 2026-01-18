import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { IoPizza } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { formatCurrency } from "../utils/formatCurrency";

const Navigation = () => {
  const total = 25000;
  const token = true;

  const formattedTotal = formatCurrency(total);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-danger d-flex align-items-center gap-2">
          <IoPizza size={25} /> ¡Pizzería Mamma Mia!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2 mt-2 mt-lg-0">
            <Button variant="outline-light" size="sm" className="d-flex align-items-center gap-1">
              <IoPizza /> Home
            </Button>

            {token ? (
              <>
                <Button variant="outline-light" size="sm" className="d-flex align-items-center gap-1">
                  <CgProfile /> Profile
                </Button>
                <Button variant="outline-light" size="sm" className="d-flex align-items-center gap-1">
                  <CiLogout /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline-light" size="sm" className="d-flex align-items-center gap-1">
                  <CiLogin /> Login
                </Button>
                <Button variant="outline-light" size="sm" className="d-flex align-items-center gap-1">
                  <CiLogin /> Register
                </Button>
              </>
            )}
          </Nav>

          <Nav className="ms-auto mt-2 mt-lg-0">
            <Button variant="outline-danger" className="text-white fw-bold d-flex align-items-center gap-2 px-3">
              <FaCartShopping /> Total: {formattedTotal}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;