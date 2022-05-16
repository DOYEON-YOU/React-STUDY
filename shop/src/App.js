/* eslint-disable */
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data'

function App() {

  let [shoes] = useState()

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>YEON</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container className='grid'>
        <Row>
          <Col sm>
            <img
              src='https://codingapple1.github.io/shop/shoes2.jpg'
              alt='shoes'
            />
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
          <Col sm>
            <img
              src='https://codingapple1.github.io/shop/shoes1.jpg'
              alt='shoes'
            />
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
          <Col sm>
            <img
              src='https://codingapple1.github.io/shop/shoes3.jpg'
              alt='shoes'
            />
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
