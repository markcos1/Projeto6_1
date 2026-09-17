import styled from "styled-components"
import { cores } from "../../styles"

import { Container } from "../../styles"

export const Apresenta = styled.div`
    width: 100%;
    height:280px;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        font-style: Thin;
        font-size: 32px;
        line-height: 100%;
        color: ${cores.branco};
        margin-bottom: 150px;
        opacity: 0.8;
    }
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-style: Black;
        font-size: 32px;
        color: ${cores.branco};
    }
    

    img {
        max-width: 100%;
        height: auto;

        &:not(:last-child) {
            margin-bottom: 190px;
    }
}


`
export const ContainerApresentacao = styled(Container)`
    display: flex;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 0;
    box-sizing: border-box;
`