import { BrowserRouter } from "react-router-dom"; 
import CustomProvider from "../Context/CustomProvider"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"


const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App


