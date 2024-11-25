import { Layout } from "antd";
import TableItems from "./components/TableItems/TableItems";
import TabPanel from "./components/TabPanel/TabPanel";

const { Sider, Content } = Layout;


export function Home() {

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider width="50%" style={{ background: '#fff' }}>
                <TableItems />
            </Sider>
            <Content style={{ padding: '20px', background: '#fff' }}>
                <TabPanel />
            </Content>
        </Layout>
    )
  

}