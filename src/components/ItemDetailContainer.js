import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {db} from "../firebase"
import {collection, getDoc, doc} from "firebase/firestore"
import Loader from "./Loader"
import {useNavigate} from "react-router-dom"


const ItemDetailContainer = () => {
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    const [producto, setProducto] = useState({})
    const params = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "shop")
        const referencia = doc(productosCollection, params.id)
        const pedido = getDoc(referencia)

        pedido.then((respuesta) => {
            const producto = respuesta.data()
            setProducto(producto)
            setLoad(true)

        }).catch((error) => {
            navigate("/404")


        })
    }, [])


    return (

        <div> 
            <div> {
                load ? <ItemDetail 
                    genero={
                        producto.genero
                    }
                    formato={
                        producto.formato
                    }
                    año={
                        producto.año
                    }
                    artista={
                        producto.artista
                    }
                    nombre={
                        producto.titulo
                    }
                    precio={
                        producto.precio
                    }
                    imagen={
                        producto.imagen
                    }
                    id={
                        params.id
                    }
                    stock={
                        producto.stock
                    }
                    /> : <Loader/>
            } </div>
            
        </div>
    )
}


export default ItemDetailContainer
