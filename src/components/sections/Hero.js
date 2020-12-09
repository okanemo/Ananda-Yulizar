import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { DownOutlined, GithubFilled, LinkedinFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';

import 'components/styles.css';

const { Title, Text } = Typography;

const lightSlateText = {
    color: '#ccd6f6'
}

const slateText = {
    color: '#8892b0'
}

const Hero = () => {
    return (
        <div className="hero section">
            <Row>
                <Col>
                    <Title level={1} style={lightSlateText}>Hello, I'm Nanda!</Title>
                    <Title level={3} id="secondary" style={slateText}>Frontend Web Developer | Informatics Undergraduate | Gamer</Title>
                    <br></br>
                    <div className="icons">
                        <Space size="large">
                            <a href="" className="icon">
                                <GithubFilled />
                            </a>
                            <a href="" className="icon">
                                <TwitterCircleFilled />
                            </a>
                            <a href="" className="icon">
                                <InstagramFilled />
                            </a>
                            <a href="" className="icon">
                                <LinkedinFilled />
                            </a>
                        </Space>
                    </div>
                    <button className="primary-btn" id="hero-btn"><DownOutlined /></button>
                </Col>
            </Row>
        </div>

    )
}

export default Hero;