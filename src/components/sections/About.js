import React, { useState, useEffect } from 'react';
import ImageProfile from 'components/ImageProfile';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const lightSlateText = {
    color: '#ccd6f6'
}

const slateText = {
    color: '#8892b0'
}

const About = () => {
    return (
        <div className="about section">
            <Row>
                <Col>
                    <Title level={1} style={lightSlateText}>About me</Title><hr className="title-underline"></hr>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 4 }}>
                    <Title level={4} style={slateText}>Hello! I'm <span className="highlight">Nanda</span>, a student from <span className="highlight">Institut Teknologi Bandung!</span></Title>
                    <Text style={slateText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                </Col>
                <Col xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 2 }}>
                    <ImageProfile />
                </Col>
            </Row>

        </div>

    )
}

export default About;