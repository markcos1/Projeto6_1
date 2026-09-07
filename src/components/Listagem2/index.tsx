import Product from "../../models/Product";
import { Container, List } from './styles';
import Produto from "../Produto";

export type Props = {
    Pratos?: Product[]
    onCardClick?: () => void
}

const Pratos = ({ Pratos, onCardClick }: Props) => (
    <Container>
        <List>
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
        </List>
    </Container>
)



export default Pratos;