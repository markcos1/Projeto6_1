import { ItemMenu, BotaoProduto } from './styles'

type Props = {

    foto: string
    nome: string
    descricao: string
    preco: number
    porcao: string
    id: number
    onOpenModal: () => void

}


const Produto = ({foto, nome, descricao, preco, porcao, id, onOpenModal}: Props) => {


    const getDescricao = (descricao: string) => {
        if (descricao.length > 130 ) {
            return descricao.slice(0, 120) + '...'
        }
        return descricao
    }

    return (

        <ItemMenu>
            <img src={foto} alt={nome} />
            <h2>{nome}</h2>
            <p>{getDescricao(descricao)}</p>
            <div>
                <BotaoProduto onClick={onOpenModal}>
                    Adicionar ao carrinho
                </BotaoProduto>
            </div>
        </ItemMenu>

        
    )   


}

export default Produto;