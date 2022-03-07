import { Row, Typography, Col, List, Divider, Tag, Card } from 'antd'
import { useShowMenu } from '../hooks/useShowMenu'

const { Title, Text } = Typography

const data = [
  {
      ticketNo: 33,
      escritorio: 3,
      agente: 'Fernando Herrera'
  },
  {
      ticketNo: 34,
      escritorio: 4,
      agente: 'Melissa Flores'
  },
  {
      ticketNo: 35,
      escritorio: 5,
      agente: 'Carlos Castro'
  },
  {
      ticketNo: 36,
      escritorio: 3,
      agente: 'Fernando Herrera'
  },
  {
      ticketNo: 37,
      escritorio: 3,
      agente: 'Fernando Herrera'
  },
  {
      ticketNo: 38,
      escritorio: 2,
      agente: 'Melissa Flores'
  },
  {
      ticketNo: 39,
      escritorio: 5,
      agente: 'Carlos Castro'
  },
];


const Queue = () => {
  useShowMenu(false)
  return (
    <>
      <Title>Attending client</Title>
      <Divider />
      <Row>
        <Col span={12}>
          <List
            itemLayout="horizontal"
            dataSource={data.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="orange">{item.escritorio}</Tag>
                  ]}
                >
                    <Title>No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            itemLayout="horizontal"
            dataSource={data.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">On desk: </Text>
                      <Tag color="orange">{item.escritorio}</Tag>
                      <Text type="secondary">Agent: </Text>
                      <Tag color="volcano">{item.agente}</Tag> 
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
};

export default Queue
