import styled from 'styled-components';

import { cores } from '../../styles'

export const Feet = styled.footer`
    background-color: ${cores.rosa2};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    p {
        font-size:10px;
        font-weight: 400;
        line-height: 100%;
    }

`

export const Links = styled.div`

    margin-top: 33px;
    margin-bottom: 80px;
    width: 88px;

    ul {
        list-style: none;
        display: flex;
        gap: 8px;
        }
    

`