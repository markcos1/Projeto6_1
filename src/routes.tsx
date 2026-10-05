import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Checkout from './pages/Checkout';




const Rotas = () => (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/perfil/:id' element={<Perfil />} />
    <Route path='/checkout' element={<Checkout />} />
    
    
    </Routes>
)


export default Rotas;
