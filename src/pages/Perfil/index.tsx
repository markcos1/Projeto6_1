
import Listagem2 from "../../components/Listagem2";

import Footer from "../../components/Rodape";
import Header from "../../components/Header";
import Apresentacao from "../../components/Apresentacao";
import Product from '../../models/Product';

import pizza from "../../assets/images/marguerita.png"


const propriedades: Product[] = [
    {
        id: 1,
        image: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
        id: 2,
        image: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
        id: 3,
        image: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
        id: 4,
        image: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
        id: 5,
        image: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
    {
        id: 6,
        image: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    },
]

const Perfil = () => (
    <>
    <Header />
    <Apresentacao />
    <Listagem2 Pratos={propriedades} />
    <Footer />
    </>
)

export default Perfil;