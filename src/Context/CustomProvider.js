import {useEffect} from "react"
import {createContext, useContext, useState} from "react"

const contexto = createContext()
const Provider = contexto.Provider


export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({children}) => {
    const guardado = JSON.parse(localStorage.getItem('guardado')) ?? [];

    const [carrito, setCarrito] = useState(guardado)
    const [totalProductos, setTotalProductos] = useState(0)
    const [precioTotal, setPrecioTotal] = useState()

    useEffect(() => {
        localStorage.setItem('guardado', JSON.stringify(carrito))
        setTotalProductos(totalCuenta)
        setPrecioTotal(totalPrecio)
    }, [carrito])

    const totalCuenta = carrito.reduce((suma, valor) => {
        return suma + valor.cantidad
    }, 0)

    const totalPrecio = carrito.reduce((suma, valor) => {
        return suma + (valor.cantidad * valor.precio)
    }, 0)

    const agregarProducto = (item, cantidad) => {
  
        setCarrito((currCart) => {
            if (estaEnCarrito(item)) {
                const dobleCart = currCart.map((el) => {
                    if (item.id == el.id) {
                        return {
                            ...item,
                            cantidad: el.cantidad + cantidad
                        }
                    } else {
                        return el
                    }
                })
             

                return [...dobleCart]
                
            } else {
                return [
                    ...currCart, {
                        ...item,
                        cantidad: cantidad
                    }
                ]
            }
        })
    }

    const eliminarProducto = (id) => {
        setCarrito((currCart) => {
            return currCart.filter((el) => el.id != id)
        })
    }


    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (item) => {
        const currCart = [...carrito]
        const found = currCart.find((el) => el.id == item.id)
        
        if (found) {
            return true
        } else {
            return false
        }
    }


    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        vaciarCarrito: vaciarCarrito,
        eliminarProducto: eliminarProducto,
        agregarProducto: agregarProducto,
        precioTotal: precioTotal,
    }

    

    return (
        <Provider value={valorDelContexto}>
            {children} </Provider>
    )
}

export default CustomProvider

