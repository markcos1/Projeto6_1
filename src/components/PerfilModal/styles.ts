import styled from "styled-components";
import { cores } from "../../styles";

import { breakpoints } from "../../styles";


export const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
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
    height: 344px;  
    padding: 32px;
    position: relative;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
        padding: 16px;
        height: auto;
    }
`;

export const BotaoFechar = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    width: min-content;

    
`;

export const ConteudoModal = styled.div`
    display: flex;
    gap: 24px;
    height: 100%;
`;

export const ImagemProduto = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 120px;
        max-height: 120px;
        width: 100%;
        height: 100%;
    }
`;

export const DetalhesProduto = styled.div`
    display: flex;
    flex-direction: column;
    color: ${cores.branco}; 

    h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    }

    p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    flex-grow: 1;
    }

    @media (max-width: ${breakpoints.tablet}) {

        margin-left: 0;
        h2 {
            font-size: 14px;    
        }
        p {
            font-size: 12px;
            line-height: 16px;
        }
    }
`;

export const BotaoAdicionar = styled.button`
    background-color: ${cores.backbotao};
    color: ${cores.laranja};
    border: none;
    width: 50%;
    padding: 8px 16px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    align-self: flex-start; 

    @media (max-width: ${breakpoints.desktop}) {
        width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        font-size: 12px;
        padding: 6px 9px;
        
    }

`



