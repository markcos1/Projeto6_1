import { Cabeca2, ContainerHeader } from './styles';


import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/fundo2.png';




const Header = () => (
    <Cabeca2 style={{ backgroundImage: `url(${back})` }}>  
        <ContainerHeader>
            <h4>Restaurantes</h4>
            <img src={logo} alt="Logo" />
            <p>0 produto(s) no carrinho</p> 
        </ContainerHeader>
    </Cabeca2>
)

export default Header;