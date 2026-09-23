import { ItemMenu, BotaoProduto } from './styles'

type Props = {

    foto: string
    nome: string
    descricao: string
    preco: string
    porcao: string
    id: number
    onOpenModal: () => void

}


const Produto = (props: Props) => {


    return (

        <ItemMenu>
            <img src={props.foto} alt={props.nome} />
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <div>
                <BotaoProduto onClick={props.onOpenModal}>
                    Adicionar ao carrinho
                </BotaoProduto>
            </div>
        </ItemMenu>

        
    )   


}

export default Produto;