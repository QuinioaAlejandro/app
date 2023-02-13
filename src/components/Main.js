import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import CheckOut from "./CheckOut"
import CartContainer from "./CartContainer"
import Error from "./Error"
import Inicio from "./Inicio"


const Main = () => {
    return (
        <main className="main">
       <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/store/:id" element={<ItemListContainer/>}/>
        <Route path="/store/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/carrito" element={<CartContainer/>}/>    
        <Route path="/404" element={<Error/>}/> 
        <Route path="/" element={<CheckOut/>}/>   
       </Routes>
    </main>
    )
}

export default Main;