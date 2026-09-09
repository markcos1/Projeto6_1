import styled from "styled-components";
import { cores } from "../../styles";


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;


export const ContainerModal = styled.div`
    background-color: ${cores.laranja}; 
    width: 100%;
    max-width: 1024px;
    height: 344px;  
    padding: 32px;
    position: relative;
    box-sizing: border-box;
`;

export const BotaoFechar = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    border: none;
    cursor: pointer;

    
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
`;

export const BotaoAdicionar = styled.button`
    background-color: ${cores.backbotao};
    color: ${cores.laranja};
    border: none;
    padding: 8px 16px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    align-self: flex-start; 
`;



