import Margueritta from "../../assets/images/marguerita.png";
import Fechar from "../../assets/images/fecharx.png";
import {Overlay, ContainerModal, BotaoFechar, ConteudoModal, ImagemProduto, DetalhesProduto, BotaoAdicionar} from "./styles";




const PerfilModal = () => {



    return (

        <Overlay>
            <ContainerModal>
                <BotaoFechar onClick={() => window.history.back()}  >
                    <img src={Fechar} alt="Fechar" />
                </BotaoFechar>
                <ConteudoModal>

                    <ImagemProduto src={Margueritta} alt="Imagem do Produto"   />
                    <DetalhesProduto>

                        <h2>Pizza Marguerita</h2>
                        <p>Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana.</p>
                        <BotaoAdicionar >Adicionar ao Carrinho - R$ 60,90 </BotaoAdicionar>

                    </DetalhesProduto>
                </ConteudoModal>

            </ContainerModal>
        </Overlay>
    )
}

export default PerfilModal;