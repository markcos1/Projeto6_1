import { useState } from 'react'
import { IMaskInput } from 'react-imask'

import * as S from '../../components/BaseModal/styles'

type PaymentData = {
    card: {
        name: string
        number: string
        code: number
        expires: {
            month: number
            year: number
        }
    }
}

type Props = {
    onBack: () => void
    onFinish: (data: PaymentData) => void
    isSubmitting?: boolean
}

const PaymentForm = ({ onBack, onFinish, isSubmitting = false }: Props) => {

    const [nameCard, setNameCard] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [expirationMonth, setExpirationMonth] = useState('')
    const [expirationYear, setExpirationYear] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
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

        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()
        const currentMonth = currentDate.getMonth() + 1

        const year = Number(expirationYear)

        if (
            year < currentYear ||
            (year === currentYear && month < currentMonth)
        ) {
            alert('O cartão está vencido!')
            return
        }

        const paymentData: PaymentData = {
            card: {
                name: nameCard,
                number: cleanCardNumber,
                code: Number(cleanCvv),
                expires: {
                    month,
                    year
                }
            }
        }

        onFinish(paymentData)
    }

    return (
        <S.ConteudoModal>

            <form onSubmit={handleSubmit}>

                <h2>Pagamento</h2>

                <p>Escolha a forma de pagamento:</p>

                <div>
                    <label htmlFor="nameCard">
                        Nome no cartão
                    </label>

                    <input
                        type="text"
                        id="nameCard"
                        name="nameCard"
                        autoComplete="cc-name"
                        value={nameCard}
                        onChange={(e) => setNameCard(e.target.value)}
                    />
                </div>

                <div className="linhaPagamento">

                    <div>
                        <label htmlFor="cardNumber">
                            Número do cartão
                        </label>

                        <IMaskInput
                            mask="0000 0000 0000 0000"
                            id="cardNumber"
                            name="cardNumber"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            value={cardNumber}
                            onAccept={(value) => setCardNumber(value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="cvv">
                            CVV
                        </label>

                        <IMaskInput
                            mask="000"
                            id="cvv"
                            name="cvv"
                            inputMode="numeric"
                            autoComplete="cc-csc"
                            value={cvv}
                            onAccept={(value) => setCvv(value)}
                        />
                    </div>

                </div>

                <div className="linhaPagamento">

                    <div>
                        <label htmlFor="expirationMonth">
                            Mês de vencimento
                        </label>

                        <IMaskInput
                            mask="00"
                            id="expirationMonth"
                            name="expirationMonth"
                            inputMode="numeric"
                            autoComplete="cc-exp-month"
                            value={expirationMonth}
                            onAccept={(value) => setExpirationMonth(value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="expirationYear">
                            Ano de vencimento
                        </label>

                        <IMaskInput
                            mask="0000"
                            id="expirationYear"
                            name="expirationYear"
                            inputMode="numeric"
                            autoComplete="cc-exp-year"
                            value={expirationYear}
                            onAccept={(value) => setExpirationYear(value)}
                        />
                    </div>

                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? 'Enviando pedido...'
                        : 'Finalizar pagamento'}
                </button>

                <button
                    type="button"
                    onClick={onBack}
                    disabled={isSubmitting}
                >
                    Voltar para a edição de endereço
                </button>

            </form>

        </S.ConteudoModal>
    )
}

export default PaymentForm
