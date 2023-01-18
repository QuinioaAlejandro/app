import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])
    const params = useParams()
    
    useEffect(() => {


        const pedido = fetch("https://fakestoreapi.com/products")

        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    let producto = productos.find(el=> el.id == params.id)

    return (
        <>
            {load ? null : 'Cargando...'}
            <ItemDetail nombre = {producto.title}
                precio = {producto.price}
                imagen = {producto.image}/>
        </>
    )
}


export default ItemDetailContainer