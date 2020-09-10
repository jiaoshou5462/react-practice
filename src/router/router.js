import React from 'react';

import { Router, Route, Switch, Link, } from 'react-router-dom';
import history from './history.js'
import css from './router.less';

import Home from 'views/home/home';
import Login from 'views/login/login';
import Head from 'views/common/head';
import LeftNav from 'views/common/left-nav';
import Activity from 'views/activity/activity';
import { AppContainer } from 'react-hot-loader'; //设置这里
let routeStr='';
history.listen(()=>{
  if(history.location.pathname=='/login'){
    routeStr = (<Route exact path="/login" component={Login} />);
  }else{
    routeStr = (<div className={css.containerBig}>
      <LeftNav history={history}/>
      <div className={css.right}>
        <Head/>
        <div className={css.container}>
          <Switch>
            <Route path="/activity" component={Activity} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>);
  }
})
const getRouter = () => (
  // <Router history={history}>
  //   <div className={css.containerBig}>
  //     <LeftNav history={history}/>
  //     <div className={css.right}>
  //       <Head/>
  //       <div className={css.container}>
  //         <Switch>
  //           <Route path="/activity" component={Activity} />
  //           <Route exact path="/" component={Home} />
  //         </Switch>
  //       </div>
  //     </div>
  //   </div>
  // </Router>
  <Router history={history}>
    {routeStr}
  </Router>
);
export default getRouter;