import React from 'react'
import Item from './Item'
import '../css/ItemList.css'  // Asegurate de importar el CSS

const ItemList = ({ data }) => {
  return (
    <div className="product-list">
        {data.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
    </div>
  )
}

export default ItemList