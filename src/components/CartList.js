import { useCarrito } from "../Context/CustomProvider"
import CartItem from "./CartItem"

const CartList = ({carrito}) => {


const {vaciarCarrito, precioTotal} = useCarrito()
return(
<div className="cart-checkout"> 
    <div className="cart-checkout__text">
    {carrito.map((el)=> (
    <CartItem key={el.id} id={el.id} nombre={el.nombre} cantidad={el.cantidad} precio={el.precio} imagen={el.imagen}/>
    ))} subtotal:${precioTotal} </div>
    <button className="cart-checkout__button" onClick={vaciarCarrito}><img src="../img/vaciar-carrito.png" alt="vaciar carrito" /></button>
</div>
)
}

export default CartList