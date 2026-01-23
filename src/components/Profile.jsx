import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Stack } from "react-bootstrap";
// Opcional: import { BoxArrowRight, PersonCircle } from "react-bootstrap-icons";

const Profile = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: "18rem" }} className="shadow-sm border-0">
          <Card.Body>
            <Stack
              direction="horizontal"
              gap={3}
              className="align-items-center mb-3"
            >
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "45px", height: "45px", fontSize: "1.2rem" }}
              >
                D
              </div>
              <div>
                <Card.Title className="mb-0 h6">Mi Perfil</Card.Title>
                <Card.Text className="text-muted small">
                  correo@gmail.com
                </Card.Text>
              </div>
            </Stack>

            <hr />

            <Button
              as={Link}
              to="/logout"
              variant="outline-danger"
              size="sm"
              className="w-100 d-flex align-items-center justify-content-center gap-2"
            >
              <span>Cerrar sesión</span>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
