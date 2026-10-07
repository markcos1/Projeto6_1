import { Apresenta, ContainerApresentacao } from './styles';


type Props = {
    tipo: string;
    titulo: string;
    capa: string;
}

const Apresentacao = ({ tipo, titulo, capa }: Props) => {

    return (

    <Apresenta style={{backgroundImage: `url(${capa})`}}>
        <ContainerApresentacao>

        <p>{tipo}</p>
        <h2>{titulo}</h2>
        </ContainerApresentacao>


    </Apresenta>

    )
}


export default Apresentacao;