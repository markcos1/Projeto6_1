import { useDispatch, useSelector } from "react-redux";
import Margueritta from "../../assets/images/marguerita.png";
import Button from "../Button";

import { Overlay, CartContainer, Sidebar, Prices, Quantity, ProdutoCard } from './styles'
import { RootReducer } from "../../store";
import {close} from "../../store/reducers/cart"

const Cart =  () => {

    const { isOpen } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    <ProdutoCard>
                        <img src={Margueritta} alt="Imagem do prato" />
                        <div>
                        <h3>Pizza Margueritta</h3>
                        <Quantity>R$ 60,90</Quantity>
                        </div>
                        <button type="button" />
                    </ProdutoCard>
                    <ProdutoCard>
                        <img src={Margueritta} alt="Imagem do prato" />
                        <div>
                        <h3>Pizza Margueritta</h3>
                        <Quantity>R$ 60,90</Quantity>
                        </div>
                        <button type="button" />
                    </ProdutoCard>
                </ul>
                <Prices>
                    Valor total <span>R$ 182,70</span>
                </Prices>
                <Button type="button" title="Clique aqui para finalizar a compra">Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart