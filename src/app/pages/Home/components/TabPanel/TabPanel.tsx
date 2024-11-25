import { Tabs, TabsProps } from 'antd';
import { useSelector } from 'react-redux';
import { selectedItem } from 'store/slices/itemsSlice';
import TabProperties from './components/TabProperties/TabProperties';
import TabImage from './components/TabImage/TabImage';

export default function TabPanel() {
    const item = useSelector(selectedItem);
    if (!item) return <p>Please select an item from the table.</p>;

    const tabs: TabsProps['items'] = [
        {
          key: '1',
          label: 'Properties',
          children: <TabProperties properties={item.properties}/>,
        },
        {
          key: '2',
          label: 'Image',
          children: <TabImage itemGuid={item.guid} itemName={item.name}/>,
        },
      ];

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
    <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
    );
};