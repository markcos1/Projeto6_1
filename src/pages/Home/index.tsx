import Hero from "../../components/Hero";
import Listagem from "../../components/Listagem";
import Restaurant from "../../models/Restaurant";
import Footer from "../../components/Rodape";
import { useEffect, useState } from "react";
import Restaurante from "../../components/Restaurante";


    export type RestauranteType = {
        id: number;
        titulo: string;
        destacado: boolean;
        tipo: string;
        avaliacao: number;
        descricao: string;
        capa: string;
        cardapio: Restaurant[];
    }
    

const Home = () => {

    const [restaurantes, setRestaurantes] = useState<RestauranteType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data) => {
                console.log("Dados recebidos da API:", data);
                setRestaurantes(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar API:", error);
                setLoading(false);
            })
    }, []);

    return (


    <>
    <Hero />
    <Listagem id='Restaurant' >
        {loading ? (
            <p>Carregando restaurantes...</p>
        ) : (
            restaurantes.map((restaurante) => (
                <Restaurante key={restaurante.id} id={restaurante.id} titulo={restaurante.titulo} destacado={restaurante.destacado} tipo={restaurante.tipo} avaliacao={restaurante.avaliacao} descricao={restaurante.descricao} capa={restaurante.capa} cardapio={restaurante.cardapio} />
            ))
        )}

    </Listagem>
    <Footer />
    </>
)

}

export default Home;