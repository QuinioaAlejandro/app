import { Link } from "react-router-dom"

const ItemDetail = (props) => {

    return (
        <div>
            <p>${props.precio}</p>
            <h3>{props.nombre}</h3>
            <Link to={"/ropa/item/" + props.id}>Ver más
            </Link>
        </div>
    )
}
export default ItemDetail
