import React, {Component} from 'react';
import css from './home.less';
import { Input } from 'antd';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			num:0,
		}
	}
	static contextTypes = {
		salary: PropTypes.number.isRequired,
   	}
    render() {
        return (
            <div className={css.container}>
				<div className={css.inputBox}>
					<Input  type="text" value={this.state.num}
					onChange={(e)=>{this.inputChange(e)}}/>
					<Button onClick={()=>{this.clickBtn}}>首页点击</Button>
				</div>
				<div className={css.word}>
					{this.context.salary}
				</div>
            </div>
        )
	}
	clickBtn(){
		console.log(this.state.num);
	}
	inputChange(event){
		this.setState({
			num:event.target.value
		})
	}
}