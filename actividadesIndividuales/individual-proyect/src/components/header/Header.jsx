import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { useLocation } from "react-router-dom";

function CollapsibleExample(props) {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" style={{ fontFamily: "cursive" }}>
          Luis Viton
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/store/fragance">
                Fragance
              </NavDropdown.Item>
              <NavDropdown.Item href="/store/sunglasses">
                Sunglasses
              </NavDropdown.Item>
              <NavDropdown.Item href="/store/wristwatch">
                Wristwatch
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/store">All Products</NavDropdown.Item>
              <NavDropdown.Item href="/addProducts">
                Add Products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" onClick={props.logOut}>
              Comments
            </Nav.Link>
            {cartQuantity > 0 && (
              <Button
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant="outline-light"
                className="rounded-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
