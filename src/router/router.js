import React from 'react';

import {Router, Route, Switch, Link,} from 'react-router-dom';
import history from './history.js'
import css from './router.less';

import Home from 'views/home/home';
import Login from 'views/login/login';
import Head from 'views/common/head';
import Activity from 'views/activity/activity';
import { AppContainer } from 'react-hot-loader'; //设置这里

const getRouter = () => (
    <Router history={history}>
        <div>
            <Head></Head>
			<div className={css.container}>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/activity" component={Activity}/>
					<Route exact path="/" component={Home}/>
				</Switch>
			</div>
        </div>
    </Router>
);
export default getRouter;