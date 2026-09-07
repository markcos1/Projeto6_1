import { useState }  from "react"

import Listagem2 from "../../components/Listagem2";
import Footer from "../../components/Rodape";
import Header from "../../components/Header";
import Apresentacao from "../../components/Apresentacao";
import PerfilModal from "../../components/PerfilModal";


import Product from '../../models/Product';

import Margueritta from "../../assets/images/marguerita.png";


const products: Product[] = [
    {
        id: 1,
        image: Margueritta,
        title: "Pizza Marguerita",
        description: "Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana."
    },
    {
        id: 2,
        image: Margueritta,
        title: "Pizza Marguerita",
        description: "Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana."
    },
    {
        id: 3,
        image: Margueritta,
        title: "Pizza Marguerita",
        description: "Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana."
    },
    {
        id: 4,
        image: Margueritta,
        title: "Pizza Marguerita",
        description: "Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana."
    },
    {
        id: 5,
        image: Margueritta,
        title: "Pizza Marguerita",
        description: "Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana."
    },
    {
        id: 6,
        image: Margueritta,
        title: "Pizza Marguerita",
        description: "Deliciosa pizza com molho de tomate, queijo mozzarella e manjericão fresco. Perfeita para os amantes de sabores clássicos e autênticos da culinária italiana."
    }
];

const Perfil = () => {

    const [modalAberto, setModalAberto] = useState(false);

    return (
    <>
        <Header />
        <Apresentacao />
        <Listagem2 Pratos={products} onCardClick={() => setModalAberto(true)} />
        <Footer />
        <PerfilModal />
    </>
)
}

export default Perfil;