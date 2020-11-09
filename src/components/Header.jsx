import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';
import AppsIcon from '@material-ui/icons/Apps';
import account from '../assets/images/account.png';

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="nav d-flex flex-row align-items-center justify-content-end">
            <ul>
              <li>
                <a href="https://mail.google.com/mail/?tab=wm&authuser=0&ogbl">
                  Gmail
                </a>
              </li>
              <li>
                <a href="https://www.google.com.sg/imghp?hl=en&tab=wi&authuser=0&ogbl">
                  Images
                </a>
              </li>
              <li className="apps">
                <AppsIcon />
              </li>
              <li>
                <img
                  src={account}
                  className="account"
                  alt="account"
                />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
