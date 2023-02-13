import {useState} from "react"
import {useCarrito} from "../Context/CustomProvider"
import {db} from "../firebase"
import {collection, addDoc} from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useNavigate} from "react-router-dom"


const Form = () => {

    const {carrito, precioTotal, vaciarCarrito} = useCarrito()
    const navigate = useNavigate()

    const [Nombre, setNombre] = useState()

    const [Mail, setMail] = useState()

    const [Apellido, setApellido] = useState()

    const [DNI, setDNI] = useState()

    const [Tarjeta, setTarjeta] = useState()

    const [CVV, setCVV] = useState()

    const [Vencimiento, setVencimiento] = useState()

    const cambiarNombre = (e) => {
        setNombre(e.target.value)
    }

    const cambiarMail = (e) => {
        setMail(e.target.value)
    }

    const cambiarApellido = (e) => {
        setApellido(e.target.value)
    }

    const cambiarDNI = (e) => {
        setDNI(e.target.value)
    }

    const cambiarTarjeta = (e) => {
        setTarjeta(e.target.value)
    }

    const cambiarCVV = (e) => {
        setCVV(e.target.value)
    }

    const cambiarVencimiento = (e) => {
        setVencimiento(e.target.value)
    }

    const confirmar = () => {
        const compra = {
            carrito: carrito,
            totalPrecio: precioTotal,
            comprador: {
                Nombre: Nombre,
                Mail: Mail,
                Apellido: Apellido,
                Tarjeta: Tarjeta,
                DNI: DNI,
                CVV: CVV,
                Vencimiento: Vencimiento
            }
        }
        const venta = collection(db, "ventas")
        const pedido = addDoc(venta, compra)
        pedido.then((res) => {
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                title: <p>Tu compra fue aceptada, tu codigo de compra es {
                    res.id
                }</p>,
                didOpen: () => {}
            }).then(() => {
                console.log("compra completa")
                navigate("/")
                vaciarCarrito()
            })
        }).catch((error) => {
            navigate("/404")

        })

    }


    return (
        <div>

            <input type="text" placeholder="Mail"
                onChange={cambiarMail}/>
            <input type="text" placeholder="Nombre"
                onChange={cambiarNombre}/>
            <input type="text" placeholder="Apellido"
                onChange={cambiarApellido}/>
            <input type="text" placeholder="DNI"
                onChange={cambiarDNI}/>
            <input type="text" placeholder="Tarjeta"
                onChange={cambiarTarjeta}/>
            <input type="text" placeholder="CVV"
                onChange={cambiarCVV}/>
            <input type="text" placeholder="Vencimiento"
                onChange={cambiarVencimiento}/>
            <button onClick={confirmar}>Confirmar Compra</button>

        </div>
    )
}

export default Form
