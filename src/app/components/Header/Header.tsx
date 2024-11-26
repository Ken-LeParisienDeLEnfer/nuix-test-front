import { StyledHeader } from "../styled/StyledHeader";
import nuixlogo from "./asset/nuix-logo.png";

export const AppHeader = () => <StyledHeader>
<img src={nuixlogo} alt="Nuix" />
<span>React / Redux test - Ken</span>
</StyledHeader>