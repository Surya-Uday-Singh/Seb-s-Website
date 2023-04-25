import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>CONTACT US</h5>
            <p>123 Main St. <br></br> Toronto, Canada 12345 <br></br> (123) 456-7890</p>
            
          </Col>
          <Col md={4}>
            <h5>SOCIAL MEDIA</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook size={32} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <FaTwitter size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram size={32} />
                </a>
              </li>
            </ul>
          </Col>
          
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-muted">&copy; 2023 Seb's Restaurant. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
