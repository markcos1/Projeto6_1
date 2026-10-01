import { ItemMenu } from './styles'

type Props = {

    foto: string
    nome: string
    descricao: string
    preco: string
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
                <button onClick={onOpenModal} type="button">
                    Adicionar ao carrinho
                </button>
            </div>
        </ItemMenu>

        
    )   


}

export default Produto;