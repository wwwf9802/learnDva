import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import AAA from './routes/aaa';
import BBB from './routes/bbb';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/aaa" exact component={AAA} />
        <Route path="/bbb" exact component={BBB} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
