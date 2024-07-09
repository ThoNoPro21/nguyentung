'use client';
import { Drawer, Flex, Input, Space } from 'antd';
import React, { useState } from 'react';
import Link from 'next/link';
import { IconMenuBar } from '../IconComponent';
import MainComponent from './MainComponent';
import SettingComponent from './SettingComponent';
import { Header } from 'antd/es/layout/layout';

type Props = {};

const HeaderComponent = (props: Props) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOnClickMenuBar = () => {
        setOpenMenu(true);
    };

    const onClose = () => {
        setOpenMenu(false);
    };

    return (
        <div className=" w-full sm:h-20 h-15 z-1000 p-0 m-0 sm:px-2  xl:px-13 bg-white text-black">
            <nav className="w-full h-full flex items-center justify-between">
                <button
                    className=" text-white text-left px-4 lg:hidden md:w-10 "
                    onClick={handleOnClickMenuBar}
                >
                    <IconMenuBar />
                </button>
                <Drawer
                    title="Nguyễn Tuyên"
                    placement="left"
                    onClose={onClose}
                    open={openMenu}
                    width="70%"
                    className="sm:hidden"
                >
                    <MainComponent mode='vertical' />

                </Drawer>
                <div className="text-center  md:flex-1 py-3 gap-3 sm:flex items-center justify-center lg:items-start  ">
                    <Link href='/'>
                        <h1 className="text-base lg:text-xl font-bold text-emerald-300 font-lora ">
                            Nguyễn Tuyên
                        </h1>
                    </Link>
                </div>
                <div className="hidden flex-1 lg:flex">
                    <MainComponent mode='horizontal' />
                </div>
                <div className="w-auto">
                    <SettingComponent />
                </div>
            </nav>
        </div>
    );
};

export default HeaderComponent;
