import { Product } from "../../pages/Perfil"
import Fechar from "../../assets/images/fecharx.png";
import {Overlay, ContainerModal, BotaoFechar, ConteudoModal, ImagemProduto, DetalhesProduto, BotaoAdicionar} from "./styles";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart"
import { formatPrice } from "../Cart";

type Props = {
    prato: Product;
    isOpen: boolean;
    onClose: () => void;
}


const PerfilModal = ({prato, isOpen, onClose}: Props) => {

    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(add(prato))
        dispatch(open())
        onClose()
    }


    return (

        <Overlay $isOpen={isOpen} onClick={onClose}>
            <ContainerModal onClick={(e) => e.stopPropagation()}>
                
                <BotaoFechar onClick={onClose}  >
                    <img src={Fechar} alt="Fechar modal" />
                </BotaoFechar>
                <ConteudoModal >

                    <ImagemProduto src={prato.foto} alt="Imagem do Produto"   />
                    <DetalhesProduto>

                        <h2>{prato.nome}</h2>
                        <p>
                            {prato.descricao}
                            <br/>
                            <br/>Serve: de 2 a 3 pessoas
                        </p>
                        <BotaoAdicionar type="button" onClick={addProduct}>Adicionar ao Carrinho - {formatPrice(prato.preco)} </BotaoAdicionar>

                    </DetalhesProduto>
                </ConteudoModal>

            </ContainerModal>
        </Overlay>
        )
}

export default PerfilModal;