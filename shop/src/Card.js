import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Card(props) {
  return (
    <Row>
      {props.shoes.map(function (a, i) {
        return (
          <Col sm>
            <img
              src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              alt='shoes'
              style={{ width: '80%' }}
              onClick={() => {props.navigate(`/detail/${props.shoes[i].id}`)}}
            />
            <h4>{props.shoes[i].title}</h4>
            <p>{props.shoes[i].content}</p>
            <h2>{props.shoes[i].price}</h2>
          </Col>
        );
      })}
    </Row>
  );
}

export default Card;
