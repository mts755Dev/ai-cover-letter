import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/ai-cover-letter.png";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
          <img src={logo} alt="Logo" style={{ height: "30px", marginRight: "10px" }} />
          AI Cover Letter
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
