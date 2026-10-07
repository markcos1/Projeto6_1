import { useState } from 'react'
import { IMaskInput } from 'react-imask'

import * as S from "../../components/BaseModal/styles"


type Props = {

    onBack: () => void;
    onContinue: () => void
}

const DeliveryForm = ({ onBack, onContinue }: Props) => {


    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] =useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    if (
        !fullName.trim() ||
        !address.trim() ||
        !city.trim() ||
        !zipCode.trim() ||
        !number.trim()
    ) {
        alert('Preencha todos os campos obrigatórios!')
        return
    }



    onContinue()
    }

    return (
        
                <S.ConteudoModal>

                <form onSubmit={handleSubmit}>
                    
                <h2>Entrega</h2>
                <div>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" name="address"  value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="linhaCepNumero">

                <div>
                    <label htmlFor="zipCode">CEP</label>
                    <IMaskInput
                        mask="0000-000"
                        id="zipCode" 
                        name="zipCode" 
                        value={zipCode} 
                        onAccept={(value) => setZipCode(value)}
                        />
                </div>
                <div>
                    <label htmlFor="number">Número</label>
                    <input type="text" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>

                </div>

                <div>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input type="text" id="complement" name="complement" value={complement} onChange={(e) => setComplement(e.target.value)} />
                </div>

                <button type="submit"  >Continuar com o pagamento</button>
                <button type="button" onClick={onBack} >Voltar para o carrinho</button>

                </form>


                </S.ConteudoModal>
            

    )
}

export default DeliveryForm