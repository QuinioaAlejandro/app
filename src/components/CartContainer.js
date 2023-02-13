import { useCarrito } from "../Context/CustomProvider"
import CartList from "./CartList"
import Form from "./Form"
import Error from "./Error"



const CartContainer = () => {
    const {carrito} = useCarrito()

    return(
        <div>
          {carrito.length == 0 ? <Error/> : <div>
          <CartList carrito={carrito}/>
           <div className="form"><Form/></div></div>}
           
        </div>
    )
}



export default  CartContainer