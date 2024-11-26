import { Col } from "antd";
import TableItems from "./components/TableItems/TableItems";
import TabPanel from "./components/TabPanel/TabPanel";
import { StyledRow } from "app/components/styled/StyledRow";



export function Home() {

    return (
        <StyledRow>
            <Col xs={24} sm={24} md={16} lg={18} xl={12}>
                <TableItems />
            </Col>
            <Col xs={24} sm={24} md={8} lg={6} xl={12}>
                <TabPanel />
            </Col>
        </StyledRow>
    )
  

}