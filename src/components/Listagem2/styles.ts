import styled from "styled-components";



export const Container = styled.section`
    max-width: 1024px;
    width: 100%;
    margin: 56px auto 120px auto;
    box-sizing: border-box;

`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`