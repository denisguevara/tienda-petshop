import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={prod.img} alt={prod.name} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          ${prod.price.toLocaleString('es-AR')},00
        </Card.Text>
        <Link to={`/item/${prod.id}`} className='btn btn-primary'>
          Ver más
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item
