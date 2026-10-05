import { useState } from "react";
import BaseModal from "../../components/BaseModal";
import DeliveryForm from "./deliveryForm";
import Perfil from "../Perfil";



const Checkout = () => {

    const  [step, setStep] = useState()


    return (
        <div>
        <Perfil />    

        <BaseModal title="Checkout" isOpen={true} onClose={() => setStep(step)}>
            <DeliveryForm   />

        </BaseModal>

        </div>
    )
}

export default Checkout