import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores } from '../../styles';

export const ButtonContainer = styled.button`
    font-size: 14px;
    font-weight: bold;
    background-color: ${cores.laranja};
    color: ${cores.rosa2};
`

export const ButtonLink = styled(Link)`
    margin-left: 8px;
    padding: 4px 6px;
    background-color: ${cores.laranja};
    color: ${cores.rosa2};
    text-decoration: none;
    
`

