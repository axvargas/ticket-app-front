import { useState } from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { useShowMenu } from '../hooks/useShowMenu'

import { getUserStorage } from '../helpers/getUserStorage';

const { Title, Text } = Typography;
const Desk = () => {
  useShowMenu(true)
  const navigate = useNavigate();
  const [agent] = useState(getUserStorage())

  if(!agent?.user && !agent?.desk){
    return (
      <Navigate
        to='/login'
      />
    )
  }

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('desk');
    navigate('/login', { replace: true });
  };
  const nextTicket = () => {
    console.log('next Click');
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{agent.user}</Title>
          <Text>You are working on desk number </Text>
          <Text type='success'>{agent.desk}</Text>
        </Col>
        <Col span={4} align='right'>
          <Button
            onClick={() => logout()}
            type='danger'
            shape='round'
            icon={<CloseCircleOutlined />}
          >
            Log out
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col span={24}>
          <Text> You are atending ticket number </Text>
          <Text style={{fontSize:28}} type='warning'>1</Text>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col offset={18} span={6} align='right'>
          <Button
            onClick={() => nextTicket()}
            shape='round'
            type='primary'
            icon={<RightOutlined />}
          >
            Next ticket
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Desk

