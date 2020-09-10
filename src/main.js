import React from 'react';
import ReactDom from 'react-dom';
import '@babel/polyfill';
import '@babel/polyfill';
import 'antd/dist/antd.css';
import 'src/assets/css/index.css';
import App from './store/app.js';
import reducer from './store/redux.js';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer)

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

if (module.hot){
	module.hot.accept();
}