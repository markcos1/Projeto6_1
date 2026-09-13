import styled from "styled-components";
import { cores } from "../../styles";

export const ListaProdutos = styled.section`
    display: block;
    padding: 56px 0;
    background-color: ${cores.rosa1};
    width: 100%;
`

export const List = styled.ul`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    list-style: none;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`