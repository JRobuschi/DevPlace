import React from "react";
import "./Monitores.css";
import { Button, Card, Row, Col } from "react-bootstrap/";

const productos = [
  {
    id: 0,
    img: "https://http2.mlstatic.com/D_NQ_NP_788429-MLA51064776306_082022-V.jpg",
    title: "Mouse",
    description: "Monitor para juegos QHD Lenovo ",
    price: 500,
  },
  {
    id: 1,
    img: "https://http2.mlstatic.com/D_NQ_NP_788429-MLA51064776306_082022-V.jpg",
    title: "Mouse",
    description: "Mouse Ps2 Con Bolita Varios",
    price: 1000,
  },
  {
    id: 2,
    img: "https://http2.mlstatic.com/D_NQ_NP_788429-MLA51064776306_082022-V.jpg",
    title: "Mouse",
    description: "Teclado gamer Razer DeathStalker ",
    price: 250,
  },
];

export default function Products() {
  return (
    <>
      <div className="monitores-container">
        <h1>Mouses</h1>
        <div className="d-flex justify-content-center text-center mt-5">
          <Row xs={1} md={2} lg={3} xl={3}>
            {productos.map((element) => (
              <Col className="d-flex justify-content-center">
                <div key={element.id} className="m-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={element.img}
                      style={{ height: "15rem" }}
                    />
                    <Card.Body>
                      <Card.Title>{element.title}</Card.Title>
                      <hr />
                      <Card.Text>
                        {element.description} ${element.price}
                      </Card.Text>
                      <Button className="w-100" class="btn btn-outline-success">
                        Comprar
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
