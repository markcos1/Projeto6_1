import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';
import { ButtonLink } from '../Button/styles';

export const Card = styled.div`
    background-color: ${cores.branco};
    width: 472px;
    height: 420px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #E66767;
    position: relative;
    display: block;
    ${TagContainer} {
        margin-right: 8px;
    }

    ${ButtonLink} {
        margin-top: 16px;
        margin-bottom: 20px;
    }


`
export const Imagem = styled.img`
    width: 100%;
    height: 217px;
`
export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 200px 0px 8px;


`

export const Titulo2 = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
`
export const Nota = styled.img`
    width: 21px;
    height: 21px;
    margin: 8px;
`
export const Divisao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;
    justify-content: space-between;
    

`
export const Divisao2 = styled.div`
    display: flex;
    align-items: center;
`


export const Descricao = styled.p`
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    margin: 16px 8px;
`

export const Infoss = styled.div`
    position: absolute;
    top: 16px;
    right: 8px;
    display: flex;

`
