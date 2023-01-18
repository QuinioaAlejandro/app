import { Button, button } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

const Main = () => {
    return (
        <main className="main">
       <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/ropa" element={<ItemListContainer/>}/>
        <Route path="/ropa/:id" element={<ItemListContainer/>}/>    
        <Route path="/ropa/item/:id" element={<ItemDetailContainer/>}/>  
       </Routes>
    </main>
    )
}

export default Main