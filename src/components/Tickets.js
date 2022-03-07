import { Row, Typography, Col, Button, Divider } from 'antd'
import { FileAddOutlined } from '@ant-design/icons'
import { useShowMenu } from '../hooks/useShowMenu'

const { Title, Text } = Typography

const Tickets = () => {
  useShowMenu(false)
  
  const newTicket = () => {
    console.log('new ticket')
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={2}>Press the button to generate a new ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<FileAddOutlined />}
            size="large"
            onClick={() => newTicket()}
          >
            New ticket
          </Button>
        </Col>
      </Row>
      <Divider />
      <br />
      <Row>
        <Col span={14} offset={6} align="center">
          <Text type="secondary">Your number is:</Text>
          <br/>
          <Text type="success" style={{fontSize: 55}}>1</Text>
        </Col>
      </Row>
    </>
  )
}

export default Tickets
