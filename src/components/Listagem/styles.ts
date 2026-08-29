import styled from 'styled-components';
import { cores } from '../../styles'

export const Container = styled.section`
    background-color: ${cores.rosa1};
    padding: 80px 171px 120px 171px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px 48px;
    width: 100%;
    margin: 80px 171px 120px 171px;
    
    
    
    @media (max-width: 768px) {
        
    }
`