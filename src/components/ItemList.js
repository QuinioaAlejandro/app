import Item from "./Item"



const ItemList = ({productos}) => {

    return(
        <div>
        <section className="item-container">
            {productos.map((el)=>(
            <article key={el.id}>
                <Item 
                nombre = {el.titulo}
                precio = {el.precio}
                imagen = {el.imagen}
                id = {el.id}
                />
            </article>))}
        </section></div>
    )
}

export default ItemList