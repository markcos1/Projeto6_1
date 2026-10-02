import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";

import { Overlay, CartContainer, Sidebar, Prices, Quantity, ProdutoCard } from './styles'
import { RootReducer } from "../../store";
import {close, remove } from "../../store/reducers/cart"



export const formatPrice = (amount = 0) => {
    return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
    }).format(amount);
};



const Cart =  () => {

    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acc, item) => acc + item.preco, 0)
    }

    const RemoveItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (

                    <ProdutoCard key={item.id}>
                        <img src={item.foto} alt="Imagem do prato" />
                        <div>
                        <h3>{item.nome}</h3>
                        <Quantity>{formatPrice(item.preco)}</Quantity>
                        </div>
                        <button type="button" onClick={() => RemoveItem(item.id)}/>
                    </ProdutoCard>
                    ))}
                </ul>
                <Prices>
                    Valor total <span>{formatPrice(getTotalPrice())}</span>
                </Prices>
                <Button type="button" title="Clique aqui para finalizar a compra">Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart