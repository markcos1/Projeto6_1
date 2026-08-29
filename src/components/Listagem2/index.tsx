import Product from "../../models/Product";
import { Container, List } from './styles';
import Produto from "../Produto";

export type Props = {
    Pratos?: Product[]
}

const Pratos = ({ Pratos}: Props) => (
    <Container>
        <List>
            {Pratos?.map((prato) => (
                <Produto 
                    key={prato.id}
                    id={prato.id}
                    description={prato.description}
                    image={prato.image}
                    title={prato.title}
                
                />
            ))}
        </List>
    </Container>
)



export default Pratos;