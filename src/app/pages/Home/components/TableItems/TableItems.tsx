import React, { useEffect } from 'react';
import { Table, TableProps } from 'antd';
import { Item } from 'models/Item';
import { useDispatch } from 'react-redux';
import { useItemGetAllQuery } from 'services/itemsApi';
import { setItems, selectItem } from 'store/slices/itemsSlice';

export default function TableItems() {   
    const { data: items } = useItemGetAllQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (items) {
            dispatch(setItems(items));
        }
    }, [items, dispatch]);

    const columns = [
        { title: 'GUID', dataIndex: 'guid', key: 'guid' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Path', dataIndex: 'path', key: 'path', render: (paths: string[]) => <span>{paths.join('/')}</span> },
      ];

    const rowSelection: TableProps<Item>['rowSelection'] = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: Item[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            dispatch(selectItem(selectedRows[0]));
        },
    };
    
    return (
      <Table
        columns={columns}
        dataSource={items}
        rowKey={(record) => record.guid}
        rowSelection={{ type: 'radio', ...rowSelection }}
      />
    );

};
