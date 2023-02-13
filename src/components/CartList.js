import { useCarrito } from "../Context/CustomProvider"
import CartItem from "./CartItem"

const CartList = ({carrito}) => {


const {vaciarCarrito, precioTotal} = useCarrito()
return(
<div> 
    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    {carrito.map((el)=> (
    <CartItem key={el.id} id={el.id} nombre={el.nombre} cantidad={el.cantidad} precio={el.precio} imagen={el.imagen}/>
))} subtotal:${precioTotal} </div>
)
}

export default CartList