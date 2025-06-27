import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
  const[detalle, setDetalle] = useState({})
  const[cargando, setCargando] = useState(false)
  const {itemId} = useParams()

  useEffect(() => {
    setCargando(true)
    getOneProduct(itemId)
    .then((response)=> setDetalle(response))
    .catch((error)=> console.log(error))
    .finally(()=>setCargando(false))
  },[])
  return (
    <div>
      {cargando? <LoaderComponent/>
      : <ItemDetail detalle={detalle}/>
      }
    </div>
  )
}

export default ItemDetailContainer