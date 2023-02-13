import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import Loader from "./Loader"
import { useNavigate } from "react-router-dom"


const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])
    const params = useParams()

    const navigate = useNavigate()
    
   
    useEffect(() => {
         const coleccion = collection(db, "shop")
         if (params.id == "all"){
            const shop = query(coleccion)
            pedidos(shop)
         }else {
            const shop = query(coleccion, where("genero", "==", params.id))
            pedidos(shop)
         }

         function pedidos(i){
            const firestorePedido = getDocs(i)

    firestorePedido
    .then((respuesta) =>{
        const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id}))
        setProductos(productos)
        setLoad(true)
    })
    .catch((error)=> {
        navigate("/404") 
       
    })
         }
        

    }, [params])

    return (
        <div className="card-container">
            <div className="card-container__text"><img src="../img/texto-simulado.png" alt="vinilos en stock" /></div>
         
            <div>
            {load ? <ItemList productos={productos}/> : <Loader/> }</div>
        </div>
    )
}


export default ItemListContainer