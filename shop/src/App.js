/* eslint-disable */
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Card from './Card';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { render } from '@testing-library/react';
import Detail from './pages/Detail';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}>
            YEON
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}>
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/About');
              }}>
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/Event');
              }}>
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <Container className='grid'>
                <Card shoes={shoes} setShoes={setShoes} navigate={navigate} />
              </Container>
            </>
          }
        />
        <Route
          path='/detail/:id'
          element={<Detail shoes={shoes} setShoes={setShoes} />}
        />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버입니다.</div>} />
          <Route path='location' element={<div>주소입니다.</div>} />
        </Route>
        <Route path='/event'>
          <Route
            path='one'
            element={
              <>
                <h2>오늘의 이벤트</h2>
                <div>첫 주문 시 양배추즙 서비스</div>
              </>
            }
          />
          <Route
            path='two'
            element={
              <>
                <h2>오늘의 이벤트</h2>
                <div>생일 기념 쿠폰 받기</div>
              </>
            }
          />
        </Route>
        <Route path='*' element={<div>없는 페이지입니다.</div>}></Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
