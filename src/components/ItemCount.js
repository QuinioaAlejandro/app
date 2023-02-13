import {useState} from "react"
import AddItemButton from "./AddItemButton"


const ItemCount = ({stock, onAdd}) => {


    const [contador, setContador] = useState(1)

    const handleSumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        } else {
            setContador(contador)
        }
    }

    const handleRestar = () => {
        if (contador == 1) {
            setContador(contador)
        } else {
            setContador(contador - 1)
        }
    }


  
    return (
        
        <div> 
            <button onClick={handleSumar}>+</button>
            <p>Cantidad: {contador}</p>
            <button onClick={handleRestar}>-</button>

            <AddItemButton onAdd={onAdd}
                contador={contador}/>
        </div>
    )

}

export default ItemCount
