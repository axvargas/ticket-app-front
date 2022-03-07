import { useState } from 'react';
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

import { useShowMenu } from '../hooks/useShowMenu'
import { getUserStorage } from '../helpers/getUserStorage';
const { Title, Text } = Typography;

const Login = () => {
  useShowMenu(true)
  const [agent] = useState(getUserStorage())
  const navigate = useNavigate()

  if(agent?.user && agent?.desk){
    return (
      <Navigate 
        to='/desk'
      />
    )
  }

  const onFinish = (values) => {
    localStorage.setItem('user', values.agent);
    localStorage.setItem('desk', values.desk);
    navigate('/desk', { replace: true })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Title level={2}>Login</Title>
      <Text> Input your name and desk number to login </Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent name"
          name="agent"
          rules={[
            {
              required: true,
              message: 'Please input your username',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desk number"
          name="desk"
          rules={[
            {
              required: true,
              message: 'Please input your desk number',
            },
          ]}
        >
          <InputNumber min={1} max={50} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            shape='round'
          >
            <LoginOutlined />
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
