import styled from 'styled-components';
import { breakpoints, cores } from '../../styles';

export const Container = styled.section`
    background-color: ${cores.rosa1};
    padding: 80px 171px 120px 171px;

    @media (max-width: ${breakpoints.desktop}) {
        padding: 80px 16px 120px 16px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px 48px;
    width: 100%;
    margin: 0 auto;
    max-width: 1024px;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr;
        gap: 40px 24px;
    }
    
    
`