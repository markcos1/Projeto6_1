import { useEffect, useState } from "react";


import Listagem2 from "../../components/Listagem2";
import Footer from "../../components/Rodape";
import Header from "../../components/Header";
import Apresentacao from "../../components/Apresentacao";
import PerfilModal from "../../components/PerfilModal";

export type Product = {
    id: number;
    foto: string;
    preco: string;
    nome: string;
    descricao: string;
    porcao: string;
}



export type Restaurantes = {
    id: number,
    titulo: string,
    destacado?: boolean,
    tipo: string,
    avaliacao: string,
    descricao: string,
    capa: string,
    cardapio: Product[]
}

const Perfil = () => {

    const [selectedProduct, setSelectedProduct ] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((data: Restaurantes[]) => {
            if (data.length > 0 && data[0].cardapio) {
                setProducts(data[0].cardapio);
            }
            setLoading(false)
        })
        .catch((error) => {
            console.error("Erro ao buscar API:", error);
            setLoading(false);
        })

    })

    if (loading) {
        return <p style={{ textDecoration: 'none', textAlign: 'center',}}>Carregando cardápio...</p>
    }


    return (
        <>
        
        <Header />
        <Apresentacao />
        <Listagem2 Pratos={products} onCardClick={(prato) => setSelectedProduct(prato) } />
        {selectedProduct && (
            <PerfilModal prato={selectedProduct} onClose={() => setSelectedProduct(null)} isOpen={false} />
        )

        }
        
        <Footer />
        </>
        
)
}

export default Perfil;