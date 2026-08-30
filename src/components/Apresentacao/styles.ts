import styled from "styled-components"


export const Apresenta = styled.div`
    display: flex;
    width: 100%;
    height:280px;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 32px 170px;
    box-sizing: border-box;
    

    img {
        max-width: 100%;
        height: auto;

        &:not(:last-child) {
            margin-bottom: 190px;
    }
}


`