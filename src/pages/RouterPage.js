import { useState, useContext, useEffect } from 'react'
import {
  Routes,
  Route,
  Link,
  Navigate,
  useLocation
} from "react-router-dom";
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import Login from '../components/Login'
import Queue from '../components/Queue'
import Tickets from '../components/Tickets'
import Desk from '../components/Desk'

import { UIContext } from '../context/UIContext'

const { Header, Sider, Content } = Layout

const options = [
  {
    key: '1',
    icon: <UserOutlined />,
    title: 'Login',
    path: '/login'
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    title: 'Queue',
    path: '/queue'
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    title: 'Tickets',
    path: '/tickets'
  }
];

const getSelected = (pathname) => {
  const selected = options.find(option => option.path === pathname)
  return selected ? selected.key : '1';
}

const RouterPage = () => {
  const { pathname } = useLocation()
  const { isMenuVisible } = useContext(UIContext)
  const [collapsed, setCollapsed] = useState(false)
  const [selected, setSelected] = useState(getSelected(pathname))

  useEffect(() => {
    setSelected(getSelected(pathname))
  }, [pathname])
  
    const toggle = () => {
    setCollapsed(!collapsed)
  };

  return (
    <Layout className='layout'>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        breakpoint='md' 
        onBreakpoint={broken => {
          setCollapsed(broken);
        }}
        hidden={!isMenuVisible}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={getSelected(pathname)} selectedKeys={[selected]}>
          {
            options.map(option => {
              return (
                <Menu.Item key={option.key} icon={option.icon}>
                  <Link to={option.path}>{option.title}</Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {
            isMenuVisible &&
            <>
              {
                collapsed ?
                  <MenuUnfoldOutlined
                    className="trigger"
                    onClick={() => toggle()}
                  /> :
                  <MenuFoldOutlined
                    className="trigger"
                    onClick={() => toggle()}
                  />   
              }
            </>
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="desk" element={<Desk />} />
            <Route path="queue" element={<Queue />} />
            <Route path="tickets" element={<Tickets />} />
            <Route
              path="*"
              element={<Navigate to="/login" />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default RouterPage
