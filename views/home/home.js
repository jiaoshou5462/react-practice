import React, {Component} from 'react';
import css from './home.less';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			num:0,
		}
    }
    render() {
        return (
            <div>
				<div className={css.inputBox}>
					<input type="text" value={this.state.num}
					onChange={(e)=>{this.inputChange(e)}}/>
					<button onClick={()=>{this.clickBtn}}>点击22</button>
				</div>
				<div>
					{this.state.num}
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