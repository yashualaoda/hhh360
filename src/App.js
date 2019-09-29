import React, { Component } from 'react';
import '@/App.less';
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './router/router.js'
import '@/libs/mock.js'
import 'antd-mobile/dist/antd-mobile.css';
import { Loading } from '@/component'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    let { appLoading } = this.props;
    return (
      <div className="App">
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component} />
              )
            })
          }
          <Redirect exact from='/' to={routes[0].path} />
          <Redirect to='/404' />
        </Switch>
        {appLoading === 'loading' ?
          <Loading /> : null
        }

      </div>
    );
  }

}

export default connect(
  function mapStatetoProps(state) {
    let { appLoading } = state;
    return {
      appLoading
    }
  }
)(App);