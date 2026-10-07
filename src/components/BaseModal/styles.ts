import styled from "styled-components";
import { cores } from "../../styles"
import { breakpoints } from "../../styles";

export const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    z-index: 1000;
    justify-content: flex-end;
    align-items: stretch;
`


export const ContainerModal = styled.div`
    background-color: ${cores.laranja}; 
    width: 400px;
    height: 100%;  
    padding: 8px;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
        padding: 24px;
        
    }
`

export const ConteudoModal = styled.div`
    display: block;
    height: 100%;




    h2 {
        color: ${cores.rosa2};
        font-size: 16px;
        font-weight: 700;
        font-style: Bold;
        line-height: 100%;
        margin-bottom: 16px;

    }

    p {
        color: ${cores.rosa2};
        font-weight: 400;
        font-style: Regular;
        font-size: 14px;
        line-height: 22px;

    }

    label {
        color: ${cores.rosa2};
        font-size: 14px;
        font-weight: 700;
        line-height: 100%;
        

    }

    input {
        background-color: ${cores.rosa2};
        margin-bottom: 16px ;
        color: #4b4b4b;
        
    }

    .linhaCepNumero {
        display: flex;
        gap: 16px;

        > div {
            flex: 1;
        }
        input {
            width: 100%;
        }
    }

    .linhaPagamento {
        display: flex;
        gap: 16px;

        > div {
            flex: 1;
        }
        input {
            width: 100%;
            box-sizing: border-box;
        }
    }

    button {
        background-color: ${cores.rosa2};
        color: ${cores.laranja};
        margin-top: 8px;
        width: 100%;
        height: 24px;
        font-size: 14px;
        line-height: 100%;
        font-weight: 700;
        font-style: bold;
        border: none;
    }

`

