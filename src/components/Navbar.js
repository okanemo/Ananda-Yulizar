import React from 'react';
import 'components/styles.css';
import { Menu, Affix } from 'antd';
import { HomeFilled } from '@ant-design/icons';

const Navbar = () => {
    return (
        <Affix offsetTop={0}>
            <Menu theme="dark" mode="horizontal" id="navbar" >
                <Menu.Item key="1" >
                    <a href="/#hero" style={{ color: "#ccd6f6", fontSize: '1.1rem' }}><HomeFilled /></a>
                </Menu.Item>
                <Menu.Item key="2" >
                    <a href="/#about" style={{ color: "#ccd6f6", fontSize: '1.1rem' }}>About</a>
                </Menu.Item>
                {/* <Menu.Item key="2">
                <a>Skills</a>
            </Menu.Item> */}
                <Menu.Item key="3">
                    <a href="/#contact" style={{ color: "#ccd6f6", fontSize: '1.1rem' }}>Contact Me</a>
                </Menu.Item>
            </Menu>
        </Affix>
    )
}

export default Navbar;