import { useCarrito } from "../Context/CustomProvider"


const CartItem = ({nombre, precio, cantidad, imagen, id}) => {

    const {eliminarProducto} = useCarrito()

const borrar = () => {
    eliminarProducto(id)


}

    return (
        <div className="cart-cards">
            <div className="cart-cards__imagen">
            <img src={"../img/" + imagen} alt="imagen" />
            
           </div>
          
            <div className="cart-cards__info">
                <div>{nombre}</div>
                <div>${precio}</div>
                <div>cantidad:{cantidad}</div>
            <button onClick={borrar}>borrar</button>
            </div></div>
    )
}



export default CartItem
