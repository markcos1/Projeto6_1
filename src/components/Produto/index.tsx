
import { ItemMenu, BotaoProduto } from './styles'

type Props = {

    image: string
    title: string
    description: string
    id: number

}


const Produto = (props: Props) => (
    <ItemMenu>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <BotaoProduto to="/carrinho">Adicionar ao carrinho</BotaoProduto>
    </ItemMenu>
)

export default Produto;