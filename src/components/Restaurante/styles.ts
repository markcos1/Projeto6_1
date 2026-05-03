import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled.div`
    background-color: ${cores.branco};
    width: 472px;
    height: 398px;
    padding-bottom: 12px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #E66767;
    position: relative;
    ${TagContainer} {
        margin-right: 8px;
    }

    

`
export const Imagem = styled.img`
    width: 100%;
    height: 217px;
`
export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    margin: 8px;
`
export const Nota = styled.img`
    margin: 8px;

`
export const Descricao = styled.p`
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    margin: 45px 8px;
`

export const Infoss = styled.div`
    position: absolute;
    top: 16px;
    right: 8px;
    display: flex;

`
export const TagContainer2 = styled.div`
    display: flex;
    align-items: center;
`