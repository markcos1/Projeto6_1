import styled from "styled-components";
import { cores } from "../../styles"
import { breakpoints } from "../../styles";

export const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`


export const ContainerModal = styled.div`
    background-color: ${cores.laranja}; 
    width: 100%;
    max-width: 1024px;
    height: 100%;  
    padding: 32px;
    position: relative;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
        padding: 16px;
        height: auto;
    }
`

export const ConteudoModal = styled.div`
    display: block;
    gap: 24px;
    height: 100%;

    h2, label {
        color: ${cores.rosa2};

    }

    input {
        background-color: ${cores.rosa2};
        margin-bottom: 16px ;
        
    }

    button {
        background-color: ${cores.rosa2};
        color: ${cores.laranja};
        margin-top: 8px
    }

`

