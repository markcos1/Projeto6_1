import { JSX } from "react";
import { TagContainer } from "./styles";

export type Props = {
    children: JSX.Element | string;
}

const Tag = ({ children }: Props) => (
    <TagContainer>
        {children}
    </TagContainer>
)

export default Tag;