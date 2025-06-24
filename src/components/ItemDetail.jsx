import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalle }) => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <Image 
            src={detalle.img} 
            alt={detalle.name} 
            fluid 
            rounded 
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </Col>
        <Col md={6}>
          <h2>{detalle.name}</h2>
          <p>{detalle.description}</p>
          <p className="text-primary h5">${detalle.price}</p>
          <p className="text-success">Stock: {detalle.stock} unidades</p>
          <ItemCount stock={detalle.stock} />
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail
