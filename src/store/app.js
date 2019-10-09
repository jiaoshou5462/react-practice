import React, { Component } from 'react';
import { connect } from 'react-redux';
import getRouter from '../router/router';
import PropTypes from 'prop-types'

class App extends Component {
	static childContextTypes = {
		salary: PropTypes.number,
		PayIncrease: PropTypes.func,
		PayDecrease: PropTypes.func,
	}
	getChildContext(){
		return {
			salary: this.props.salary,
			PayIncrease: this.props.PayIncrease,
			PayDecrease: this.props.PayDecrease,
		};
	}
	render() {
		return (
			getRouter()
		);
	}
}

//需要渲染什么数据
function mapStateToProps(state) {
	return {
		salary: state
	}
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
	return {
		PayIncrease: () => dispatch({ type: '涨工资' }),
		PayDecrease: () => dispatch({ type: '扣工资' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);