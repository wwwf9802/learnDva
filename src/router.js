import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import AAA from './routes/aaa';
import BBB from './routes/bbb';
import Login from './routes/login'
import Home from './routes/home/home'
import HomeA from './routes/home/homeA'
import HomeB from './routes/home/homeB'

function RouterConfig({ history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/aaa" exact component={AAA} />
        <Route path="/bbb" exact component={BBB} />
        <Route path="/login" exact component={Login} />
        <Home>
            <Route path="/home/a/:idA" exact component={HomeA} />
            <Route path="/home/b/:id" exact component={HomeB} />
        </Home>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
