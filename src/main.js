import React from 'react';
import ReactDom from 'react-dom';
import '@babel/polyfill';
import '@babel/polyfill';
import getRouter from './router/router';
import 'antd/dist/antd.css';

ReactDom.render(
    getRouter(), document.getElementById('root'));