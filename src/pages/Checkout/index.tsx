import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../store/reducers/cart";

import * as S from "../../components/BaseModal/styles";

import BaseModal from "../../components/BaseModal";
import DeliveryForm from "./deliveryForm";
import PaymentForm from "./PaymentForm";
import { Product } from "../Perfil";

type DeliveryData = {
    receiver: string;
    address: {
        description: string;
        city: string;
        zipCode: string;
        number: number;
        complement: string;
    };
};

type PaymentData = {
    card: {
        name: string;
        number: string;
        code: number;
        expires: {
            month: number;
            year: number;
        };
    };
};

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [etapa, setEtapa] = useState<
        "entrega" | "pagamento" | "confirmacao"
    >("entrega");

    const [deliveryData, setDeliveryData] =
        useState<DeliveryData | null>(null);

    const [orderId, setOrderId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    // Seu reducer confirma que os produtos estão aqui
    const products = useSelector((state: any) => state.cart.items);

    const handleDeliveryContinue = (data: DeliveryData) => {
        setDeliveryData(data);
        setEtapa("pagamento");
    };

    const handlePaymentFinish = async (paymentData: PaymentData) => {
        if (!deliveryData) {
            setError("Os dados de entrega não foram preenchidos.");
            return;
        }

        try {
            setIsSubmitting(true);
            setError("");

            const payload = {
                products: products.map((product: Product) => ({
                    id: product.id,
                    price: product.preco
                })),

                delivery: deliveryData,

                payment: paymentData
            };

            console.log("Payload enviado:", payload);

            const response = await fetch(
                "https://api-ebac.vercel.app/api/efood/checkout",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );

            const data = await response.json();

            console.log("Status da API:", response.status);
            console.log("Resposta da API:", data);

            if (!response.ok) {
                throw new Error("Erro ao finalizar o pedido");
            }

            setOrderId(data.orderId);

            // Só limpa o carrinho depois que a API responder com sucesso
            dispatch(clear());

            // Vai para a confirmação
            setEtapa("confirmacao");

        } catch (error) {
            console.error(error);

            setError(
                "Não foi possível finalizar o pedido. Tente novamente."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <BaseModal
            title={etapa === "confirmacao" ? "confirmação" : "checkout"}
            isOpen={true}
            onClose={() => navigate(-1)}
        >

            {etapa === "entrega" && (
                <DeliveryForm
                    onBack={() => navigate(-1)}
                    onContinue={handleDeliveryContinue}
                />
            )}

            {etapa === "pagamento" && (
                <>
                    <PaymentForm
                        onBack={() => setEtapa("entrega")}
                        onFinish={handlePaymentFinish}
                        isSubmitting={isSubmitting}
                    />

                    {error && (
                        <p style={{ marginTop: "16px" }}>
                            {error}
                        </p>
                    )}
                </>
            )}

            {etapa === "confirmacao" && (
                <S.ConteudoModal>

                    <h2>
                        Pedido realizado - {orderId}
                    </h2>

                    <p>
                        Estamos felizes em informar que seu pedido já está
                        em processo de preparação e, em breve, será entregue
                        no endereço fornecido.
                    </p>

                    <br />

                    <p>
                        Gostaríamos de ressaltar que nossos entregadores não
                        estão autorizados a realizar cobranças extras.
                    </p>

                    <br />

                    <p>
                        Lembre-se da importância de higienizar as mãos após o
                        recebimento do pedido, garantindo assim sua segurança
                        e bem-estar durante a refeição.
                    </p>

                    <br />

                    <p>
                        Esperamos que desfrute de uma deliciosa e agradável
                        experiência gastronômica. Bom apetite!
                    </p>

                    <button
                        style={{ marginTop: "24px" }}
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        Concluir
                    </button>

                </S.ConteudoModal>
            )}

        </BaseModal>
    );
};

export default Checkout;

