import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Listagem2 from "../../components/Listagem2";
import Footer from "../../components/Rodape";
import Header from "../../components/Header";
import Apresentacao from "../../components/Apresentacao";
import PerfilModal from "../../components/PerfilModal";

export type Product = {
    id: number;
    foto: string;
    preco: number;
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

    const { id } = useParams<{ id: string }>();
    const [restaurante, setRestaurante] = useState<Restaurantes | null>(null);
    const [selectedProduct, setSelectedProduct ] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((data: Restaurantes) => {
            if (data) {
                setRestaurante(data);
                setProducts(data.cardapio || []);
            }
            setLoading(false)
        })
        .catch((error) => {
            console.error("Erro ao buscar API:", error);
            setLoading(false);
        })

    }, [id]);

    if (loading) {
        return <p style={{ textDecoration: 'none', textAlign: 'center',}}>Carregando cardápio...</p>
    }


    return (
        <>
        
        <Header />
        {restaurante && (
            <Apresentacao tipo={restaurante.tipo} titulo={restaurante.titulo} capa={restaurante.capa} />

        )}
        <Listagem2 Pratos={products} onCardClick={(prato) => setSelectedProduct(prato) } />
        {selectedProduct && (
            <PerfilModal prato={selectedProduct} onClose={() => setSelectedProduct(null)} isOpen={!!selectedProduct} />
        )

        }
        
        <Footer />
        </>
        
)
}

export default Perfil;