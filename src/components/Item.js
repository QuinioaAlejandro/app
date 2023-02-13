import {Link} from "react-router-dom"


const Item = (props) => {

    return (
        <div className="product-card">
            <article>
                <img className="product-card__image"
                    src={
                        "../img/" + props.imagen
                }></img>
            </article>

            <article>
                <p className="product-card__precio">${
                    props.precio
                }</p>
                <h3 className="product-card__title">
                    {
                    props.nombre
                }</h3>
                <Link to={
                    "/store/item/" + props.id
                }> <img src="../img/ver-mas.png" alt="ver mas" />
                </Link>
            </article>
        </div>
    )
}

export default Item;
