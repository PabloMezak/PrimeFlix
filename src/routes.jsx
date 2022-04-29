import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/indes"
import Erro from './pages/Error'
import Favoritos from "./pages/Favoritos/Favoritos"
import Filme from "./pages/FIlme"
import Home from "./pages/Home"

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favoritos" element={<Favoritos/>} />

                <Route path="*" element={<Erro/>}/>
            </Routes>

        </BrowserRouter>
    )
}
