import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './body.css';
import SearchIcon from '@material-ui/icons/Search';
import GButton from './Button';
import Logo from '../assets/images/google-logo.png';

const Body = () => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    // eslint-disable-next-line
    if (!input) {
      // eslint-disable-next-line
      alert("Don't leave it blank");
    } else {
      const query = input.trim().replace(' ', '+');
      const link = `https://www.google.com/search?q=${query}`;
      window.location.href = link;
    }
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
      console.log('working');
    }
  };

  return (
    <>
      <Container className="body-container">
        <Row className="text-center">
          <Col>
            <img src={Logo} alt="" className="mb-3" />
          </Col>
        </Row>
        <Row className="text-center mb-3">
          <Col>
            <div className="search-box">
              <div className="search-container d-flex align-items-center">
                <div className="search-icon">
                  <SearchIcon className="search-icon-pd" />
                </div>
                <input
                  type="text"
                  className="search-input"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  onKeyPress={handleKeyPress}
                />
                <div>
                  <svg
                    className="mic"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                      fill="#4285f4"
                    />
                    <path d="m11 18.08h2v3.92h-2z" fill="#34a853" />
                    <path
                      d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                      fill="#f4b400"
                    />
                    <path
                      d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="text-center mb-2">
          <Col>
            <GButton
              message="Google Search"
              searchSubmit={handleSubmit}
            />
            <GButton
              message="I'm Feeling Lucky"
              href={() => {
                window.location.href = 'https://testing-library.com/';
              }}
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="offerings">
              Google offered in: &nbsp;
              <a href="https://google.com">中文(简体)</a>
              &nbsp;
              <a href="https://google.com">Melayu</a>
              &nbsp;
              <a href="https://google.com">தமிழ்</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Body;
