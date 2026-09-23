import { Product} from "../../pages/Perfil"
import * as S from './styles';
import { Container } from '../../styles';
import Produto from "../Produto";



export type Props = {
    Pratos: Product[]
    onCardClick: (prato: Product) => void
}

const Pratos = ({ Pratos, onCardClick }: Props) => {


    return  (
    
    <S.ListaProdutos>
    <Container>
        <S.List>
            {Pratos?.map((prato) => (
                <Produto 
                    key={prato.id}
                    id={prato.id}
                    descricao={prato.descricao}
                    foto={prato.foto}
                    nome={prato.nome}
                    porcao={prato.porcao}
                    preco={prato.preco}
                    onOpenModal={() => onCardClick(prato)}

                />
            ))}
        </S.List>
    </Container>
    </S.ListaProdutos>

)
}

export default Pratos;