import { useCarrito } from "../Context/CustomProvider";

const CartWidget = () => {

const {totalProductos} = useCarrito()

    return (
        <div className="cart">
            <img src="/../img/cart.png" alt="cart"></img>
            <div className="cart_
            _counter">{totalProductos == 0 ? null : <div className="cart__counter"> {totalProductos} </div>}</div>
           </div>
    )
}

export default CartWidget;



 {/* <div className="cart__counter"> {totalProductos} </div> */}