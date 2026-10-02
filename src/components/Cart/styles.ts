import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";
import lixeira from "../../assets/images/lixeira-de-reciclagem.png"
import { breakpoints } from "../../styles";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 80%;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open{
        display: flex;
    }

`

export const Sidebar = styled.aside`
    background-color: ${cores.laranja};
    z-index: 1;
    list-style: none;
    max-width: 360px;
    width: 100%;
    padding: 16px 8px;

    ${ButtonContainer} {
        background-color: ${cores.rosa2};
        color: ${cores.laranja};
        font-weight: 700;
        font-size: 14px;
        font-style: Bold;
        max-width: 100%;
        width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
        width: 260px;
    }
`

export const Prices = styled.p`
    color: ${cores.rosa2};
    font-weight: 700;
    font-size: 14px;
    font-style: bold;
    justify-content: space-between;
    display: flex;
    margin-top: 40px;
    margin-bottom: 16px;

    span {
        display: inline;
    }
`

export const Quantity = styled.span`
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 22px;
`

export const ProdutoCard = styled.li`
    background-color: ${cores.rosa2};
    width: 344px;
    height: 100px;
    display: flex;
    padding: 8px;
    margin-bottom: 16px;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
        
    }

    h3{
        margin-bottom: 16px;
        font-weight: 900;
        font-size: 18px;
        font-style: Black;
    }

    button{
        background-image: url(${lixeira});
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 8px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        height: auto;
    }
`