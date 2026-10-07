import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clear } from "../../store/reducers/cart"

import * as S from "../../components/BaseModal/styles"

import BaseModal from "../../components/BaseModal";
import DeliveryForm from "./deliveryForm";
import PaymentForm from "./PaymentForm";




const Checkout = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [ etapa, setEtapa ] = useState<'entrega' | 'pagamento' | 'confirmacao'>('entrega')

    return (    

        <BaseModal  
                title={etapa === 'confirmacao' ? 'confirmacao' : 'checkout'}
                isOpen={true}
                onClose={() => navigate(-1)}>

            {etapa === 'entrega' ? (

                <DeliveryForm   onBack={() => navigate(-1)}  onContinue={() => setEtapa('pagamento')}/>

            ) :  etapa === 'pagamento' ? (
                <PaymentForm
                    onBack={() => setEtapa('entrega')}
                    onFinish={() => {
                        dispatch(clear())
                        setEtapa('confirmacao')
                    }}
                />
            ) : (
                    <S.ConteudoModal >

                        <h2>Pedido realizado - (ORDER_ID) </h2>

                        <p>
                            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                        </p>
                        <br />
                        <p>
                            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                        </p>
                        <br />
                        <p>
                            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                        </p>
                        <br />
                        <p>
                            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                        </p>

                        <button style={{marginTop: '24px', } } type="button" onClick={() => navigate(-1)}> Concluir </button>


                    </S.ConteudoModal>
            )}
        
            

        </BaseModal>
    )
}

export default Checkout