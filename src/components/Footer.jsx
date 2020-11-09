/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Row className="top-footer justify-content-between">
          <Col md="auto" className="pd-0">
            <ul>
              <li>
                <span>Singapore</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="bottom-footer justify-content-between">
          <Col md="auto" className="pd-0">
            <ul>
              <li>
                <a href="https://www.google.com/intl/en_sg/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                  Advertising
                </a>
              </li>
              <li>
                <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
                  Business
                </a>
              </li>
              <li>
                <a href="https://about.google/?utm_source=google-SG&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                  About
                </a>
              </li>
              <li>
                <a href="https://google.com/search/howsearchworks/?fg=1">
                  How Search Works
                </a>
              </li>
            </ul>
          </Col>
          <Col md="auto">
            <ul>
              <li>
                <a href="https://policies.google.com/privacy?hl=en-SG&fg=1">
                  Privacy
                </a>
              </li>
              <li>
                <a href="https://policies.google.com/terms?hl=en-SG&fg=1">
                  Terms
                </a>
              </li>
              <li>
                <a href="https://www.google.com/preferences?hl=en">
                  Settings
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
