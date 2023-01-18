import Item from "./Item"



const ItemList = ({productos}) => {

    return(
        <div>
            {productos.map((el)=>(<article key={el.id}>
                <Item 
                nombre = {el.title}
                precio = {el.price}
                imagen = {el.image}
                id = {el.id}
                />
            </article>))}
        </div>
    )
}

export default ItemList