import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light mt-5">
      <Container style={{marginTop:"17.75%"}}>
        <Row>
          <Col className="text-center mt-3">
            <p>Made with <FontAwesomeIcon icon={faHeart} color="red" /> by
              <a href="https://github.com/mts755Dev" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
