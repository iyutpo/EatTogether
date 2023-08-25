
import React from 'react';
import '../index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Switch, theme } from 'antd';
import UserProfile from './UserProfile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FoodPreference from './FoodPreference';


const { Header, Content, Footer, Sider } = Layout;


// Define the Main Navigation Page names (on the header bar)
const nav_labels = {
    '1': 'Home',
    '2': 'Start a Dinner',
    '3': 'Search', 
}
// Assign the Main Navigation Page names
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: nav_labels[key],
}));


// Define the Sub Navigation Page names (on the left-side bar)
const subnav_labels = {
    '1': 'Profile',
    '2': 'Manage Events', 
    '3': 'Social Media', 
}
const subnav_profile_options = {
    '1': 'User Profile',
    '2': 'Food Preference',
    '3': 'Saved Restaurants',
}

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: key,
    icon: React.createElement(icon),
    // label: subnav_labels[key],
    label: (
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            {subnav_labels[key]}
        </a>
    )
  };
});



// Define the functional component
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        {/* <Breadcrumb
          separator=">"
          items={[
            {
                title: "Home",
                href: "./",
            },
            {
                title: "Profile",
                href: "./UserProfile",
            }, 
            {
                title: 'Food Preference',
                href: './FoodPreference'
            }
          ]}
          style={{
            margin: '16px 0',
          }}
        >
            
        </Breadcrumb> */}

        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>

          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            
            <h1>hello</h1>

          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};




export default HomePage;


















