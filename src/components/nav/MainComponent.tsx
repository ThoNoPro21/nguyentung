import { Flex, Menu, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


type Props = {
    mode:any;
};
const menuItems = [
    {
        key: '/',
        label: 'BÀI VIẾT MỚI',
    },
    {
        key: '/blog',
        label: 'PHÁT TRIỂN KINH DOANH',
    },
    {
        key: '/product',
        label: 'PHÁT TRIỂN BẢN THÂN',
    },
    {
        key: '/festival',
        label: 'CỬA HÀNG',
    },
    {
        key: '/place',
        label:'NGUYỄN TUYÊN LÀ AI',
    },

];
const MainComponent = (props: Props) => {
    const router = useRouter();
    const handleMenuBarOnClick: MenuProps['onClick'] = (e) => {
        // router.push(e.key);
    };
    return (
        <div className="menu-header">
            <Menu
                mode={props.mode}
                onClick={handleMenuBarOnClick}
                defaultSelectedKeys={['/']}
                selectedKeys={['/']}
                items={menuItems}
                className="bg-transparent w-full "
            />
        </div>
    );
};

export default MainComponent;
