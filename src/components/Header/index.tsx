import { HashLink as Link } from 'react-router-hash-link'
import { Cabeca2, ContainerHeader } from './styles';

import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/fundo2.png';

import {open} from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
// import { useGetFeatureProductQuery } from '../../services/api'



const Header = () => {

    const dispatch = useDispatch()
    const {items} = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return (
    <Cabeca2 style={{ backgroundImage: `url(${back})` }}>  
        <ContainerHeader>
            <Link to="/#Restaurant">
            <h4>Restaurantes</h4>
            </Link>
            <Link to="/">
            <img  src={logo} alt="Logo" />         
            </Link>
            <p onClick={openCart} >{items.length} produto(s) no carrinho</p> 
        </ContainerHeader>
    </Cabeca2>
)
}

export default Header;