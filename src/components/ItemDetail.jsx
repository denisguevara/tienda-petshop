//importar el hook useContext
import {useContext, useState} from 'react'
//importar el contexto que se quiere usar
import { CartContext } from '../context/CartContext'
import { Container, Row, Col, Image } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ detalle }) => {
  const[compra,setCompra] = useState(false)
  const {addItem} = useContext(CartContext)

  const onAdd = (cantidad) => {
    setCompra(true)
    console.log(`Compraste ${cantidad} del Item ${detalle.name}`)
    //Logica del carrito con Context
    addItem(detalle, cantidad)
  }
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
          {compra ? 
            <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
              <Link to='/' className='btn btn-dark'>Seguir comprando</Link>
              <Link to='/cart' className='btn btn-dark'>Ir al carrito</Link>
            </div> 
            : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
          
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail
