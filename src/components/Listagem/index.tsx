import { Container, List } from './styles';

export type Props = {
    id?: string
    children?: React.ReactNode

}

const Listagem = ({  id, children }: Props) => (
    <Container >
        <List id={id}>
            {children}
        </List>
    </Container>
)

export default Listagem;


