import Product from "../../models/Product";
import * as S from './styles';
import { Container } from '../../styles';
import Produto from "../Produto";

export type Props = {
    Pratos: Product[]
    onCardClick: () => void
}

const Pratos = ({ Pratos, onCardClick }: Props) => (
    
    <S.ListaProdutos>
    <Container>
        <S.List>
            {Pratos?.map((prato) => (
                <Produto 
                    key={prato.id}
                    id={prato.id}
                    description={prato.description}
                    image={prato.image}
                    title={prato.title}
                    onOpenModal={onCardClick}

                />
            ))}
        </S.List>
    </Container>
    </S.ListaProdutos>
        )

export default Pratos;