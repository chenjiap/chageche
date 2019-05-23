import React, {Component} from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Check from './pages/check/check'
import Result from './pages/result'
import CheckDetail from './pages/check-detail'
import CheckVin from './pages/check-vin'

export default class App extends Component {
  render () {
    return <BrowserRouter>
			<Switch>
				<Route path='/check' component={Check} exact></Route>
				<Route path='/result' component={Result}></Route>
				<Route path='/check/detail' component={CheckDetail}></Route>
				<Route path='/check/vin' component={CheckVin}></Route>
			</Switch>
		</BrowserRouter>
      
    
  }
}

