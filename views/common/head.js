import React, { Component } from 'react';
import css from './head.less';
import logo from 'src/assets/images/logo.png';
import history from 'src/router/history.js'

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: '',
    }
  }
  render() {
    return (
      <div className={css.head}>
        <div className={css.logo}>
          {/* <img src={logo} alt=""/> */}
					react
				</div>
        <div className={css.login} onClick={this.toLogin}>登录</div>
      </div>
    )
  }
  componentDidMount() {
  }

  componentWillUnmount() {

  }
  toLogin=()=> {
    history.push('/login');
  }
}