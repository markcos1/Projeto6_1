import { Cabeca } from './styles';

import back from '../../assets/images/fundo.svg';
import logo from '../../assets/images/logo.svg';

const Hero = () => (
    <Cabeca style={{ backgroundImage: `url(${back})` }}>
        <div className="container">
            <img src={logo} alt="Logo do site" />
            <h1>Viva experiências gastronômicas no conforto da sua casa
            </h1>
        </div>
        
    </Cabeca>
)

export default Hero