import React, {Component} from 'react';
import css from './head.less';
import logo from 'src/assets/images/logo.png';
import history from 'src/router/history.js'

export default class Head extends Component {
	constructor(props){
		super(props);
		this.state = {
			list:[
				{name:'首页',path:'/',id:'1'},
				{name:'活动',path:'/activity',id:'2'},
			],
			currentPath:'',
		}
		
    }
    render() {
		let listItem = this.state.list.map((item)=>
			<span key={item.id} className={item.active? css.active:''}
				onClick={()=>{this.toPages(item)}}>
			{item.name}
			</span>
		)
        return (
            <div className={css.head}>
				<div className={css.logo}>
					{/* <img src={logo} alt=""/> */}
					react
				</div>
				<div className={css.menu}>
					{listItem}
				</div>
				<div className={css.login} onClick={()=>{this.toLogin}}>登录</div>
            </div>
        )
	}
	componentDidMount() {
		this.setCurrentPage();
	}
  
	componentWillUnmount() {
  
	}
	setCurrentPage(){
		for(let item of this.state.list){
			if(history.location.pathname==item.path){
				item.active = true;
			}else{
				item.active = false;
			}
		}
		this.setState({
			list: this.state.list,
		})
	}
	toPages(item){
		history.push(item.path);
		this.setCurrentPage();
	}
	toLogin(){
		history.push('/login');
	}
}