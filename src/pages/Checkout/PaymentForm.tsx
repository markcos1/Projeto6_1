import { useState } from 'react'
import * as S from '../../components/BaseModal/styles'


type Props = {
    onBack: () => void
    onFinish: () => void
    
}

const PaymentForm = ({ onBack, onFinish }: Props) => {


    const [nameCard, setNameCard] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [expirationMonth, setExpirationMonth] = useState('')
    const [expirationYear, setExpirationYear] = useState('')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(
            !nameCard.trim() ||
            !cardNumber.trim() ||
            !cvv.trim() ||
            !expirationMonth.trim() ||
            !expirationYear.trim()
        ) {
            alert('Preencha todos os campos obrigatórios!')
            return
        }

        const cleanCardNumber = cardNumber.replace(/\D/g, '')

        if (cleanCardNumber.length !== 16) {
            alert('O número do cartão deve ter 16 dígitos!')
            return
        }

        const cleanCvv = cvv.replace(/\D/g, '')

        if (cleanCvv.length !== 3) {
            alert('O Cvv deve ter 3 dígitos!')
            return
        }

        const month = Number(expirationMonth)

        if (month < 1 || month > 12) {
            alert('Informe um mês de vencimento válido!')
            return
        }

        const currentYear = new Date().getFullYear()
        const year = Number(expirationYear)

        if (year < currentYear) {
            alert('O ano de vencimento do cartão é inválido!')
            return
        }

        onFinish()
    }


    return (
        <S.ConteudoModal>
            <h2>Pagamento</h2>
            <p>Escolha a forma de pagamento:</p>

            <div>
                <label htmlFor='nameCard'>Nome no cartão </label>
                <input type="text" id='nameCard' name='nameCard' value={nameCard} onChange={(e) => setNameCard(e.target.value)}/>
            </div>


            <div className='linhaPagamento'>

            <div>
                <label htmlFor='cardNumber' >Número do cartão </label>
                <input
                    type="text"
                    id='cardNumber'
                    name='cardNumber'
                    inputMode='numeric'
                    maxLength={16}
                    value={cardNumber}
                    onChange={(e) =>  {
                        const value = e.target.value.replace(/\D/g, '')
                        setCardNumber(value)
                    }}/>
            </div>
            <div>
                <label htmlFor='cvv'> CVV </label>
                <input
                    type="text"
                    id='cvv' 
                    name='cvv' 
                    inputMode='numeric'
                    maxLength={3}
                    value={cvv} 
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setCvv(value)
                    }}/>
            </div>

            </div>

            <div className='linhaPagamento'>

            <div >
                <label htmlFor='expirationMonth'> Mês de vencimento </label>
                <input
                    type="text"
                    id='expirationMonth'
                    name='expirationMonth'
                    inputMode='numeric'
                    maxLength={2}
                    value={expirationMonth} 
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setExpirationMonth(value)
                    }}/>
            </div>
            <div>
                <label htmlFor='expirationYear'> Ano de vencimento </label>
                <input
                    type="text"
                    id='expirationYear'
                    name='expirationYear'
                    value={expirationYear} 
                    inputMode='numeric'
                    maxLength={4}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        setExpirationYear(value)
                    }}/>
            </div>

            </div>

            <form onSubmit={handleSubmit}>
                <button type='submit'>Finalizar pagamento</button>
                <button type='button' onClick={onBack}>Voltar para a edição de endereço</button>
            </form>


        </S.ConteudoModal>
    )
}

export default PaymentForm