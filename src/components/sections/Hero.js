import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { DownOutlined, GithubFilled, LinkedinFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

import 'components/styles.css';

const { Title } = Typography;

const lightSlateText = {
    color: '#ccd6f6'
}

const slateText = {
    color: '#8892b0'
}

const Hero = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

    return (
        <div className="hero section" id="hero">
            <Row>
                <Col>
                    <Title level={1} style={lightSlateText}>Hello, I'm Nanda!</Title>
                    <Title level={isMobile ? 5 : 3} id="secondary" style={slateText}>Frontend Web Developer | Informatics Undergraduate | Gamer</Title>
                    <br></br>
                    <div className="icons">
                        <Space size="large">
                            <a href="https://github.com/anandayulizar" target="_blank" rel="noreferrer" className="icon">
                                <GithubFilled />
                            </a>
                            <a href="https://twitter.com/ananda570" target="_blank" rel="noreferrer" className="icon">
                                <TwitterCircleFilled />
                            </a>
                            <a href="https://www.instagram.com/anandayulizar/" target="_blank" rel="noreferrer" className="icon">
                                <InstagramFilled />
                            </a>
                            <a href="https://www.linkedin.com/in/ananda-yulizar/" target="_blank" rel="noreferrer" className="icon">
                                <LinkedinFilled />
                            </a>
                        </Space>
                    </div>
                    <a href="/#about"><button className="primary-btn" id="hero-btn"><DownOutlined /></button></a>
                </Col>
            </Row>
        </div>

    )
}

export default Hero;