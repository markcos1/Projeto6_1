import styled from "styled-components";
import { cores } from "../../styles";

// O Overlay ocupa a tela inteira com os 80% de opacidade pretos do Figma
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8); /* Dados do seu print: #000000 80% */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

// Caixa do Modal com as medidas exatas selecionadas no seu Figma
export const ContainerModal = styled.div`
    background-color: ${cores.laranja}; /* Cor salmão/rosa */
    width: 100%;
    max-width: 1024px; /* Largura exata do print */
    height: 344px;    /* Altura exata do print */
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

    img {
    width: 16px;
    height: 16px;
    }
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
    color: ${cores.branco}; /* Substitua pela sua variável de cor clara */

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
    background-color: ${cores.cordefundo};
    color: ${cores.corbotaooverlay};
    border: none;
    padding: 8px 16px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  align-self: flex-start; /* Impede o botão de esticar até o final */
`;



