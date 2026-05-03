import { Card, Imagem, Descricao, Nota, Titulo, Infoss, TagContainer2 } from './styles';
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
        <TagContainer2>
        <Titulo>{title}</Titulo>
        <h3>{nota}</h3>
        <Nota src={image2}  />
        </TagContainer2>
        <Descricao>{description}</Descricao>
        <ButtonLink to="/perfil">Saiba mais</ButtonLink>
    </Card>
)



export default Restaurante;