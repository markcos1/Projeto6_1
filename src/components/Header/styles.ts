import styled from 'styled-components';
import { cores } from '../../styles';

import { Container } from '../../styles';

export const Cabeca2 = styled.header`
    display: flex;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: space-between;
    align-items: center;


    h4, p {
        font-weight: 900;
        font-style: normal;
        font-size: 18px;
        line-height: 100%;
        text-align: center;
        color: ${cores.laranja};

    }

`
export const ContainerHeader = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 56px 0;
`