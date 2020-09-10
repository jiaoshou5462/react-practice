import React, { Component } from 'react';
import css from './style.less';
import { Input } from 'antd';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }
  static contextTypes = {
    salary: PropTypes.number.isRequired,
    PayIncrease: PropTypes.func.isRequired,
    PayDecrease: PropTypes.func.isRequired
  }
  render() {
    const { PayIncrease, PayDecrease, salary } = this.context;
    return (
      <div className={css.container}>
        <div className={css.inputBox}>
          {/* <Input type="text" value={this.state.num} onChange={(e)=>{this.inputChange(e)}}/> */}
          <Input type="text" value={salary} />
          <Button onClick={PayIncrease}>加工资</Button>
          <Button onClick={PayDecrease}>减工资</Button>
        </div>
      </div>
    )
  }
  clickBtn() {

  }
  inputChange(event) {
    this.setState({
      num: event.target.value
    })
  }
}