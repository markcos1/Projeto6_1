import { useParams } from "react-router-dom";

import Listagem2 from "../../components/Listagem2";
import Footer from "../../components/Rodape";
import Header from "../../components/Header";
import Apresentacao from "../../components/Apresentacao";


import Product from '../../models/Product';

import Margueritta from "../../assets/images/marguerita.png";
import PerfilModal from "../../components/PerfilModal";


const products: Product[] = [
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
    }
];


const Perfil = () => {
    const { id } = useParams();

    return (
    <>
        <Header />
        <Apresentacao />
        <PerfilModal url={`/produto/${id}`} />
        <Listagem2 Pratos={products} />
        <Footer />
    </>
)
}

export default Perfil;