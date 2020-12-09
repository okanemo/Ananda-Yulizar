import React from 'react';
import 'components/styles.css';
import { Menu } from 'antd';

const Navbar = () => {
    return (
        <Menu theme="dark" mode="horizontal" id="navbar">
            <Menu.Item key="1">
                <span>About</span>
            </Menu.Item>
            <Menu.Item key="2">
                <span>Skills</span>
            </Menu.Item>
            <Menu.Item key="3">
                <span>Contact Me</span>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;