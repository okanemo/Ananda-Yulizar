import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Contact = () => {
    return (
        <div className="contact section">
            <Title level={2}>Contact Me</Title>
            <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </div>

    )
}

export default Contact;