import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Checkout from './pages/Checkout';




const Rotas = () => {

    const location = useLocation()

    const backgroundLocation = location.state?.backgroundLocation

    return (

        <>
        
        <Routes location={backgroundLocation || location}>
        <Route path='/' element={<Home />} />
        <Route path='/perfil/:id' element={<Perfil />} />
        <Route path='/checkout' element={<Checkout />} />
        
        </Routes>
    
        {backgroundLocation && (
            <Routes>
            <Route path='/checkout' element={<Checkout />} ></Route>
            </Routes>
        )}
        
        </>
)

}

export default Rotas;
