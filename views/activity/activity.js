import React, {Component} from 'react';
import css from './style.less';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			num:0,
		}
    }
    render() {
        return (
            <div className={css.container}>
				<div className={css.inputBox}>
					<input type="text" value={this.state.num} onChange={(e)=>{this.inputChange(e)}}/>
					<button onClick={this.clickBtn}>点击11</button>
				</div>
            </div>
        )
	}
	clickBtn(){
		
	}
	inputChange(event){
		this.setState({
			num:event.target.value
		})
	}
}