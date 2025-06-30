//Ver mas
import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
  const[detalle, setDetalle] = useState({})
  const[cargando, setCargando] = useState(false)
  const[invalid, setInvalid] = useState(false)
  const {itemId} = useParams()

  //firebase
  useEffect(()=>{
    setCargando(true)
    //conectamos con nuestra coleccion
    const productsCollection = collection(db, "productos")
    //crear referencia al documento que queremos traer
    const docRef = doc(productsCollection, itemId)
    //traer un documento
    getDoc(docRef)
    .then((res)=>{
      if(res.data()){
        setDetalle({...res.data(), id:res.id})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=>console.log(error))
    .finally(()=>setCargando(false))
  },[])

  if(invalid){
    return(
      <div>
        <h2>El producto no existe 😅</h2>
        <Link className='btn btn-dark'>Volver a home</Link>
      </div>
    )
  }


  //Promesa
  /*useEffect(() => {
    setCargando(true)
    getOneProduct(itemId)
    .then((response)=> setDetalle(response))
    .catch((error)=> console.log(error))
    .finally(()=>setCargando(false))
  },[])*/
  return (
    <div>
      {cargando? <LoaderComponent/>
      : <ItemDetail detalle={detalle}/>
      }
    </div>
  )
}

export default ItemDetailContainer