import Margueritta from "../../assets/images/marguerita.png";
import Fechar from "../../assets/images/fecharx.png";
import { BotaoProduto } from "../Produto/styles";
import { List } from "../Listagem2/styles";
import { Container2, Item, Items } from "./styles";
import { url } from "inspector";

type PerfilModalProps = {
    url: string;
}

const mock: PerfilModalProps = {
    url: Margueritta
}

const PerfilModal = (props: PerfilModalProps) => {
    return (
        <Container2>
        <Items>
            {mock.url && (
            <Item>
            <img src={props.url} alt="Marguerita" />
            <img src={Fechar} alt="Fechar" />
            <h2>Pizza Marguerita</h2>
            <p>Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana.</p>
            <div>
                <BotaoProduto to={props.url} >Adicionar ao Carrinho</BotaoProduto>
            </div>
            </Item>
            )}
        </Items>

        </Container2>
    )
}

export default PerfilModal;