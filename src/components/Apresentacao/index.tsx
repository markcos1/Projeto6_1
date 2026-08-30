import macarrao2 from '../../assets/images/macarrao2.png';
import Italia from '../../assets/images/Italiana.png';
import titulosec from '../../assets/images/title.png';

import { Apresenta } from './styles';

const Apresentacao = () => (



    <Apresenta style={{backgroundImage: `url(${macarrao2})`}}>
        <img src={Italia} alt=" Italiana "></img>
        <img src={titulosec} alt=" La Dolce Vita Trattoria "></img>

    </Apresenta>


)

export default Apresentacao;