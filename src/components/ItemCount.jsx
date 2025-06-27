import { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const sumar = () => {
    if (count < stock) setCount(count + 1)
  }

  const restar = () => {
    if (count > 1) setCount(count - 1)
  }

  const comprar = () => {
    onAdd(count)
  }

  return (
    <div className="text-center mt-3">
        <ButtonGroup className="mb-3">
            <Button variant="outline-secondary" onClick={restar}>-</Button>
            <Button variant="light" disabled>{count}</Button>
            <Button variant="outline-secondary" onClick={sumar}>+</Button>
        </ButtonGroup>

        <Button variant="primary" className="w-100" onClick={comprar}>
            <img src="../cart.png" alt="Carrito" width="20" style={{ marginRight: '8px' }} />
            Agregar al carrito
        </Button>
    </div>
  )
}

export default ItemCount
