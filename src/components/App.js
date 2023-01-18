import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import Utils from './Utils';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
    return (
     <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
        <ItemListContainer greeting="estas por comprar tu vinilo"/>
       </BrowserRouter>
    )
}

export default App
