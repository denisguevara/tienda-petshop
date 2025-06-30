import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, cartTotal, clear, removeItem} = useContext(CartContext)
    return (
    <div>
        <h2>Tu carrito 🛒</h2>
        <div>
            {/* Recorrer el array del carrito y mostrar lo que tiene*/}
            {
                cart.map((compra) => (
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem'}}>
                        <img src={compra.img} alt={compra.name} style={{width:'7rem'}}/>
                        <span>{compra.name}</span>
                        <span>${compra.price},00</span>
                        <span>{compra.quantity}</span>
                        <span>Precio final: ${compra.price * compra.quantity},00</span>
                        <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
                    </div>
                ))
            }


        </div>
        {/*Mostrar el total a pagar y la opcion de borrar todo el carrito y terminar la compra */}
        <span>Total a pagar: ${cartTotal()},00</span>
        <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
            <button className='btn btn-dark' onClick={clear}>Borrar</button>
            <Link to='/checkout' className='btn btn-dark'>Terminar compra</Link>
        </div>

    </div>
        
  )
}

export default CartView