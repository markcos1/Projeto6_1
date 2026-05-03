import Hero from "../../components/Hero";
import Listagem from "../../components/Listagem";
import Restaurant from "../../models/Restaurant";

import japones from "../../assets/images/sushi.png";
import estrela from "../../assets/images/estrela.png";
import italiano from "../../assets/images/macarrao.png";
import Footer from "../../components/Rodape";


const categorias: Restaurant[] = [
    {
        id: 1,
        image: japones,
        infos: ["Destaque da semana", "Japonesa"],
        title: "Hioki Sushi",
        nota: 4.9,
        image2: estrela,
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    },
    {
        id: 2,
        image: italiano,
        infos: [ "italiana"],
        title: "La Dolce Vita Trattoria",
        nota: 4.6,
        image2: estrela,
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ",
    },
    {
        id: 3,
        image: italiano,
        infos: ["italiana"],
        title: "La Dolce Vita Trattoria",
        nota: 4.6,
        image2: estrela,
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ",
    },
    {
        id: 4,
        image: italiano,
        infos: ["italiana"],
        title: "La Dolce Vita Trattoria",
        nota: 4.6,
        image2: estrela,
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    },
    {
        id: 5,
        image: italiano,
        infos: ["italiana"],
        title: "La Dolce Vita Trattoria",
        nota: 4.6,
        image2: estrela,
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já! ",
    },
    {
        id: 6,
        image: italiano,
        infos: ["italiana"],
        title: "La Dolce Vita Trattoria",
        nota: 4.6,
        image2: estrela,
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    },
]

const Perfil = () => (
    <>
    <Hero />
    <Listagem Restaurantes={categorias} />
    <Footer />
    </>
)

export default Perfil;