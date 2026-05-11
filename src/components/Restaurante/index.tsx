import { Card, Imagem, Descricao, Nota, Titulo, Infoss, Divisao, Titulo2, Divisao2} from './styles';
import Tag from '../Tag';
import { ButtonLink } from '../Button/styles';


type Props ={
    description: string
    image: string
    image2: string
    nota: number
    infos: string[]
    title: string

}

const Restaurante = ({  description, image, image2, nota, infos, title }: Props) => (

    <Card>
        <Imagem src={image}  />
        <Infoss>
            {infos.map((info) => (
                <Tag key={info}>{info}</Tag>
            ))}
        </Infoss>
        <Divisao>
        <Titulo>{title}</Titulo>
        <Divisao2>
        <Titulo2>{nota}</Titulo2>
        <Nota src={image2} />
        </Divisao2>
        </Divisao>
        <Descricao>{description}</Descricao>
        <ButtonLink to="/perfil">Saiba mais</ButtonLink>
    </Card>
)



export default Restaurante;