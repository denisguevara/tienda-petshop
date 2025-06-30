import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { db } from '../service/firebase'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const {cart, cartTotal, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name] : e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        //Para que no recargue el form
        e.preventDefault()

        if(!buyer.name || !buyer.address || !buyer.email){
            alert("Todos los datos son requeridos!")
        }
        else if(buyer.email !== validateEmail){
            alert("Los correos no coinciden")
        }
        else{
            let orden = {
            comprador:buyer,
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const ventas = collection(db, "orders")

        //agregar un Doc
        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
        }
    }

  return (
    <>
    {
        orderId
        ? <div>
            <h3>Generaste correctamente tu orden!</h3>
            <h3>El id es:{orderId}</h3>
            <Link to='/' className='btn btn-dark'>Volver a Home</Link>
        </div>
        
        :<div>
            <h2>Completa con tus datos</h2>
            <form onSubmit={finalizarCompra}>
                <input className='form-control' type="text" placeholder='Complete con su nombre' name='name' onChange={buyerData}/>
                <input className='form-control' type="text" placeholder='Complete con su direccion' onChange={buyerData} name='address'/>
                <input className='form-control' type="email" placeholder='Complete con su correo' onChange={buyerData} name='email'/>
                <input className='form-control' type="email" placeholder='Repita su correo' name='email2' onChange={(e)=>setValidateEmail(e.target.value)}/>
                <button className='btn btn-success' type='submit'>Finalizar compra</button>
            </form>
        </div>
        
        
    }
    </>
  )
}

export default Checkout