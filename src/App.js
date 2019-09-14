import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect} from 'react-router-dom'
import routes from './router/router.js'
import '@/libs/mock.js'
import 'antd-mobile/dist/antd-mobile.css';  
class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key = { route.path }
                  path = { route.path }
                  component = { route.component } />
               )
             })
           }
           <Redirect exact from = '/'  to = { routes[0].path } />
           <Redirect to = '/404' />
         </Switch>
      </div>
    );
  }
  
}

export default App;