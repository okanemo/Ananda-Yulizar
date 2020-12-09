import React, { useState, useEffect } from 'react';
import ImageProfile from 'components/ImageProfile';
import { Typography, Row, Col, List } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const { Title, Text } = Typography;

const lightSlateText = {
    color: '#ccd6f6'
}

const slateText = {
    color: '#8892b0'
}

const biggerText = {
    fontSize: '1.1rem'
}

const About = () => {
    const skills = [
        {
            title: 'Nodejs',
        },
        {
            title: 'Reactjs',
        },
        {
            title: 'Expressjs',
        },
        {
            title: 'Nuxtjs',
        },
        {
            title: 'Python',
        },
        {
            title: 'PHP',
        }
    ]

    const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

    return (
        <div className="about section">
            <Row>
                <Col>
                    <Title level={1} style={lightSlateText}>About Me</Title><hr className="title-underline"></hr>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 4 }}>
                    <Title level={4} style={slateText}>Hello! I'm <span className="highlight">Nanda</span>, a student from <span className="highlight">Institut Teknologi Bandung!</span></Title>
                    <Text style={{ ...slateText, ...biggerText }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                    <br /><br />
                    Here are a few skills I picked up recently:
                    </Text>
                    <Row>
                        <Col>
                            <List
                                grid={{ gutter: 60, column: 2 }}
                                itemLayout="horizontal"
                                dataSource={skills}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={<span className="skill-list" style={biggerText}><span className="highlight"><CaretRightOutlined /></span> {item.title}</span>}
                                        />
                                    </List.Item>
                                )}
                            />

                        </Col>
                    </Row>
                </Col>
                {isMobile ? null : (<Col xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 2 }}>
                    <ImageProfile />
                </Col>)}

            </Row>

        </div >

    )
}

export default About;