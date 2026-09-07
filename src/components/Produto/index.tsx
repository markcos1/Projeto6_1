
import { Link } from 'react-router-dom'
import { ItemMenu, BotaoProduto } from './styles'

type Props = {

    image: string
    title: string
    description: string
    id: number
    onOpenModal?: () => void

}


const Produto = (props: Props) => {


    return (
    <ItemMenu>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div>
        <BotaoProduto as={Link} to="/PerfilModal">
            Adicionar ao carrinho
        </BotaoProduto>
        </div>
    </ItemMenu>
)
}

export default Produto;