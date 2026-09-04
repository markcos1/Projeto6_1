import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';
import { ButtonLink } from '../Button/styles';

export const Card = styled.div`
    background-color: ${cores.branco};
    width: 100%;
    min-height: 400px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #E66767;
    position: relative;
    display: flex;
    flex-direction: column;
    ${TagContainer} {
        margin-right: 8px;
    }

    ${ButtonLink} {
        margin-left: 8px;
        margin-top: auto;
        margin-bottom: 8px;
        align-self: flex-start;
    }


`
export const Imagem = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
`
export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 0;


`

export const Titulo2 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`
export const Nota = styled.img`
    width: 21px;
    height: 21px;
    margin-left: 8px;
`
export const Divisao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px 0 8px;
    

`
export const Divisao2 = styled.div`
    display: flex;
    align-items: center;
`


export const Descricao = styled.p`
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    margin: 0;
    padding: 16px 8px;
`

export const Infoss = styled.div`
    position: absolute;
    top: 16px;
    right: 8px;
    display: flex;

`
