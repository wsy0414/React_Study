import React from 'react';
import Home from './components/Home';
import User from './components/User';
import AdminUser from './components/AdminUser';
import GuestUser from './components/GuestUser';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';

export default () => {
  return (
    <div>
    <HashRouter>
      
        <ul>
          <Link to='/home'>Home</Link>
          <Link to='/user'>User</Link>
        </ul>
        <Route path='/home' component={Home} />
        {/* <<Route path='/user' component={User} />> */}
        <User>
          <Switch>
            <Route path='/user/admin' component={AdminUser} />
            <Route path='/user/guest' component={GuestUser} />
          </Switch>
        </User>
      
    </HashRouter>
    </div>
  );
}


