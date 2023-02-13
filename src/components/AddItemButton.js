const AddItemButton = ({contador, onAdd}) => {

    const handleConfirmar = () => {
      onAdd(contador)
       }

       
    return(
    <button onClick={handleConfirmar}>Confirmar</button>
)
}

export default AddItemButton