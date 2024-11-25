import { Header } from "antd/es/layout/layout";
import nuixlogo from "./asset/nuix-logo.png";

import "./Header.css";

export const AppHeader = () => <Header className="header">
<img className="header-img" src={nuixlogo} alt="Nuix" />
<span>React / Redux test - Ken</span>
</Header>