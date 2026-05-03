import Restaurant from "../../models/Restaurant";
import Restaurante from "../Restaurante";
import { Container, List } from './styles';

export type Props = {
    Restaurantes: Restaurant[]

}

const Listagem = ({ Restaurantes }: Props) => (
    <Container>
        <List>
            {Restaurantes.map(restaurante => (<Restaurante key={restaurante.id} description={restaurante.description} image={restaurante.image} image2={restaurante.image2} nota={restaurante.nota} infos={restaurante.infos} title={restaurante.title} />))}
        </List>
    </Container>
)

export default Listagem;


