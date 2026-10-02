import { Card, Imagem, Descricao, Nota, Titulo, Infoss, Divisao, Titulo2, Divisao2} from './styles';
import Tag from '../Tag';
import { ButtonLink } from '../Button/styles';
import Restaurant from '../../models/Restaurant';
import estrela from '../../assets/images/estrela.png';



type Props ={
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: Restaurant[];

}

const Restaurante = ({ id, titulo, destacado, tipo, avaliacao, descricao, capa, cardapio }: Props) => (

    <Card>
        <Imagem src={capa} alt={titulo} />

        <Infoss>
            {destacado && <Tag>Destaque da semana</Tag>}
            <Tag>{tipo}</Tag>
        </Infoss>

        <Divisao>
        <Titulo>{titulo}</Titulo>

        <Divisao2>
        <Titulo2>{avaliacao}</Titulo2>
        <Nota src={estrela} alt="Estrela de avaliação" />
        </Divisao2>

        </Divisao>

        <Descricao>{descricao}</Descricao>
        <ButtonLink to={`/perfil/${id}`}>Saiba mais</ButtonLink>
    </Card>
)



export default Restaurante;