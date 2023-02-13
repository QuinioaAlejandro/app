import { useCarrito } from '../Context/CustomProvider';
import ItemCount from './ItemCount';

const ItemDetail = ({genero, formato, año, artista, nombre, precio, imagen, stock, id }) => {

    const {agregarProducto} = useCarrito()

    const onAdd = (parametro) => {
   agregarProducto({
    id:id,
    nombre:nombre, 
    precio:precio,
    artista:artista,
    stock:stock,
    imagen:imagen,
}, parametro)
    }

    return (
        <div className="item-margin">
        <div className="item-detail">
            
         <div className="item-detail__imagen">
            <img src={
                "/../img/" + imagen
            }></img></div>
            <div className="item-detail__info">
            
            <p>{formato}</p>
            <p>{año}</p>
            <p>{artista}</p>
            <p>${precio}</p>
            <h3>{nombre}</h3>
            <ItemCount stock={stock}
                onAdd={onAdd}/>

        </div></div></div>

    )
}
export default ItemDetail
