import Margueritta from "../../assets/images/marguerita.png";
import Fechar from "../../assets/images/fecharx.png";
import {Overlay, ContainerModal, BotaoFechar, ConteudoModal, ImagemProduto, DetalhesProduto, BotaoAdicionar} from "./styles";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}


const PerfilModal = (props: Props) => {



return (

    <Overlay>
        <ContainerModal>
            <BotaoFechar onClick={props.onClose}  >
                <img src={Fechar} alt="Fechar" />
            </BotaoFechar>
            <ConteudoModal>

                <ImagemProduto src={Margueritta} alt="Imagem do Produto"   />
                <DetalhesProduto>

                    <h2>Pizza Marguerita</h2>
                    <p>
                        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.

                        <p>Serve: de 2 a 3 pessoas</p>
                    </p>
                    <BotaoAdicionar >Adicionar ao Carrinho - R$ 60,90 </BotaoAdicionar>

                </DetalhesProduto>
            </ConteudoModal>

        </ContainerModal>
    </Overlay>
    )
}

export default PerfilModal;