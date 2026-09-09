import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import PerfilModal from './components/PerfilModal';



const Rotas = () => (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/perfil' element={<Perfil />} />

    
    
    </Routes>
)


export default Rotas;
