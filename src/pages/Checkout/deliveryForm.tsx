import * as S from "../../components/BaseModal/styles"




const DeliveryForm = () => {
    return (
        <S.Overlay $isOpen={true} >
            <S.ContainerModal>
                <S.ConteudoModal>
                    <h2>Entrega</h2>
                <div>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input type="text" id="fullName" name="fullName" />
                </div>
                <div>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" name="address" />
                </div>
                <div>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" name="city" />
                </div>
                <div>
                    <label htmlFor="zipCode">CEP</label>
                    <input type="text" id="zipCode" name="zipCode" />
                </div>
                <div>
                    <label htmlFor="number">Número</label>
                    <input type="text" id="number" name="number" />
                </div>
                <div>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input type="text" id="complement" name="complement" />
                </div>
                <button type="button"  >Continuar com o pagamento</button>
                <button type="button"  >Voltar para o carrinho</button>
                </S.ConteudoModal>
            </S.ContainerModal>
        </S.Overlay>

    )
}

export default DeliveryForm