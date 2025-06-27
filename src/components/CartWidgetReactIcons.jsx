import { Badge } from "react-bootstrap"
import {IoCartSharp} from "react-icons/io5"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidgetReactIcons = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
     return(
        <div>
            <IoCartSharp fontSize={'1.5rem'}/>
            <Badge bg="danger"> 8 </Badge>
        </div>
     )
}

export default CartWidgetReactIcons