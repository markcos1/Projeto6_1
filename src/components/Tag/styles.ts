import styled from "styled-components";

import { cores } from "../../styles"

import { Props } from "./index";

export const TagContainer = styled.div<Props>`
    padding: 6px 4px;
    background-color: ${cores.laranja};
    color: ${cores.rosa2};
    font-size: 12px;
    font-weight: bold;
    margin-top: 16px;
    margin-right: 8px;
    line-height: 100%;
`