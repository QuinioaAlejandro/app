import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom" 

const ItemListContainer = () => {

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
                if (params.id == "femenina"){
                    const fem = productos.filter(el=> el.category == "women's clothing") 
                    setProductos(fem)

                }
                else{setProductos(productos)}
                setLoad(true)

            })
            .catch((error) => {
                console.log(error)
            })

    }, [params])

    return (
        <>
            {load ? null : 'Cargando...'}
            <ItemList productos={productos}/>
        </>
    )
}


export default ItemListContainer