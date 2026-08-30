import styled from "styled-components";

import { cores } from "../../styles";

export const Container = styled.section`
    background-color: ${cores.rosa1};
    margin: 56px 171px 120px 171px;

`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    width: 100%;
    
    
    @media (max-width: 768px) {
        
    }
`