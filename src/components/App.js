// import Cards from "./Cards"
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'


const App = () => {
    return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        <ItemListContainer greeting="estas por comprar tu vinilo"/>
        </>
    )
}

export default App
