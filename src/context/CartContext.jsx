import { createContext, useState } from "react";

//Creamos nuestro contexto
export const CartContext = createContext()

//Creamos nuestro proveedor
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    //Todas las funciones que modifiquen ese estado

    //Agregar un item al carrito, no repetir y sumar cantidades
    const addItem = (item, cantidad) => {
        //console.log(item, cantidad, 'desde el contexto')
        console.log({...item, quantity:cantidad}, 'desde el contexto')
        if(isInCart(item.id)){
            //Ya existe ese item en el carrito, tengo que sumar cantidades
            //Logica de sumar cantidades
            const updateCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    //Sumar cantidades
                    return{...prod, quantity: prod.quantity + cantidad}
                }
                else{
                    //Retorno el objeto sin modificar
                    return prod
                }
            })
            //Actualizar el carrito con su nuevo array
            setCart(updateCart)
        }
        else{
            //Se agrega el producto nuevo
            setCart([...cart, {...item, quantity:cantidad}])
        }
    }

    //Borrar el carrito
    const clear = () => {
        setCart([])
    }

    //Eliminar un item del carrito
    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //Tiene que devolver un booleano si esta o no en el carrito
    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id == id)
    }


    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}