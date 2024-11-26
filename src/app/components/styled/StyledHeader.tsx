import { Header } from "antd/es/layout/layout";
import { styled } from "styled-components";


export const StyledHeader = styled(Header)`
    display: flex;
    color: ${p => p.theme.secondaryColor};
    flex-direction: row;
    gap: 20px;

    > img {
        height: 40px;
        margin-top: 10px;
    }
`;