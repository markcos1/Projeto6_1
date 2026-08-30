import styled from "styled-components";

import { cores } from "../../styles"
import { Link } from "react-router-dom";

export const ItemMenu = styled.section`
    display: block;
    width: 320px;
    height: 338px;
    background-color: ${cores.laranja};
    padding: 8px;
    border: 1px solid ${cores.laranja};

    


    h2 {
    
        font-size: 16px;
        font-weight: 900;
        color: ${cores.rosa2};
        margin-top: 8px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        color: ${cores.rosa2};
        margin-top: 8px;
        margin-bottom: 8px;
    }
`
export const BotaoProduto = styled(Link)`
    padding: 4px 6px;
    width: 304px;
    height: 24px;
    display: flex;
    justify-content: center;
    margin-right: 30px;;
    font-size: 14px;
    font-weight: 700;
    color: ${cores.laranja};
    background-color: ${cores.rosa2};
    text-align: center;
    text-decoration: none;

`
