import React, { Component } from 'react';
import css from './left-nav.less';
import history from 'src/router/history.js'
import { Menu ,Button } from 'antd';
const { SubMenu } = Menu;
import { HomeOutlined } from '@ant-design/icons';

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: '首页', path: '/', id: '1' },
        { name: '活动', path: '/activity', id: '2' },
      ],
      collapsed:false,
      currentId: '',
    }
  }
  render() {
    let listItem = this.state.list.map((item) =>
      <Menu.Item key={item.id} onClick={() => { this.toPages(item) }}>{item.name}</Menu.Item>
    )
    return (
      <div className={css.left}> 
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.currentId]}
          mode="inline"
          theme="dark"
        >
        <SubMenu
          key="sub1"
          title={
            <span>
              <HomeOutlined />
              <span>首页</span>
            </span>
          }
        >
        {listItem}
        </SubMenu>
        </Menu>
      </div>
    )
  }
  componentDidMount() {
    this.setCurrentPage();
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleClick = e => {
    // console.log('click ', e);
  }
  setCurrentPage() {
    let currentId = '';
    for (let item of this.state.list) {
      if (history.location.pathname == item.path) {
        currentId = item.id;
        break;
      }
    }
    
    this.setState({
      currentId: currentId,
    });
  }
  toPages(item) {
    history.push(item.path);
    this.setCurrentPage();
  }
  toLogin() {
    history.push('/login');
  }
}