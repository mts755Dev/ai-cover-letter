import React, { useState } from "react";
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { generateCoverLetter } from "../openai"; // import GPT-3 API function

const Content = () => {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const generatedCoverLetter = await generateCoverLetter(name, expertise, jobDescription);
      setCoverLetter(generatedCoverLetter);
    } catch (error) {
      console.error(error);
      alert('Error generating cover letter!');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    alert('Cover letter copied to clipboard!');
    setName('');
    setExpertise('');
    setJobDescription('');
    setCoverLetter('');
  };

  return (
    <div className="d-flex align-items-center">
      <Container>
        <Card className="my-3 mx-auto">
          <Card.Body className="mt-3 mb-3">
            <Row>
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Expertise</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your expertise"
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={3}
                      placeholder="Enter job description"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                    />
                  </Form.Group>

                  <Button className="mt-3" variant="primary" type="submit">
                    Generate Cover Letter
                  </Button>
                </Form>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Cover Letter</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    readOnly
                    value={coverLetter}
                  />
                </Form.Group>
                <Button className="mt-3" variant="secondary" onClick={handleCopy}>
                  <FontAwesomeIcon icon={faCopy} />
                  &nbsp;Copy Cover Letter
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Content;
