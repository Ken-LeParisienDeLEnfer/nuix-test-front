import { Row } from "antd";
import { styled } from "styled-components";

export const StyledRow = styled(Row)`
    height: 100vh;
    background: ${p => p.theme.secondaryColor};
    padding: 20px;
`;