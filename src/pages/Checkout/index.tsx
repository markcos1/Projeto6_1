import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { clear, close } from "../../store/reducers/cart"

import BaseModal from "../../components/BaseModal";
import DeliveryForm from "./deliveryForm";
import PaymentForm from "./PaymentForm";
import { useDispatch } from "react-redux";




const Checkout = () => {

    const dispatch =useDispatch()

    const navigate = useNavigate()

    const [ etapa, setEtapa ] = useState<'entrega' | 'pagamento'>('entrega')

    return (    

        <BaseModal title="Checkout" isOpen={true} onClose={() => navigate(-1)}>

            {etapa === 'entrega' ? (

                <DeliveryForm   onBack={() => navigate(-1)}  onContinue={() => setEtapa('pagamento')}/>

            ) : (
                <PaymentForm
                    onBack={() => setEtapa('entrega')}
                    onFinish={() => {
                        dispatch(clear())
                        dispatch(close())
                        alert('Pedido realizado com sucesso!')
                        navigate(-1)
                    }}
                />
            )}
        
            

        </BaseModal>
    )
}

export default Checkout