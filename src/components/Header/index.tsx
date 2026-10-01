import {Link} from 'react-router-dom'

import { Cabeca2, ContainerHeader } from './styles';

import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/fundo2.png';

import {open} from '../../store/reducers/cart'
import { useDispatch } from 'react-redux';
// import { useGetFeatureProductQuery } from '../../services/api'



const Header = () => {

    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    return (
    <Cabeca2 style={{ backgroundImage: `url(${back})` }}>  
        <ContainerHeader>
            <h4>Restaurantes</h4>
            <Link to="/">
            <img  src={logo} alt="Logo" />         
            </Link>
            <p onClick={openCart} >0 produto(s) no carrinho</p> 
        </ContainerHeader>
    </Cabeca2>
)
}

export default Header;