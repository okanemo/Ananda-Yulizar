import React from 'react';
import { Typography, Row, Col, Form, Input, Button } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const lightSlateText = {
    color: '#ccd6f6'
}

const biggerText = {
    fontSize: '1.1rem',
}

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20
    }
};

const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16
    }
}

const Contact = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Error: ', errorInfo);
    }

    return (
        <div className="contact section" id="contact">
            <Row>
                <Col style={{ margin: 'auto' }}>
                    <Title level={1} style={lightSlateText}>Contact Me</Title><hr className="title-underline"></hr>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form
                        {...layout}
                        name="message"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        size="large"
                    >
                        <Form.Item
                            label={<label style={{ ...lightSlateText, ...biggerText }}>Name</label>}
                            name="name"
                        >
                            <Input placeholder="Enter your name..." autoComplete="off" />
                        </Form.Item>

                        <Form.Item
                            label={<label style={{ ...lightSlateText, ...biggerText }}>Email</label>}
                            name="email"
                        >
                            <Input placeholder="Enter your email..." autoComplete="off" />
                        </Form.Item>

                        <Form.Item
                            label={<label style={{ ...lightSlateText, ...biggerText }}>Message</label>}
                            name="message"
                        >
                            <TextArea rows={4} placeholder="Enter your message..." autoComplete="off" />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>

    )
}

export default Contact;