import styled from 'styled-components';
import { cores } from '../../styles'

export const Container = styled.section`
    background-color: ${cores.rosa1};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    padding: 80px 171px;
`