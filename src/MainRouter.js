import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Errors from './views/Errors';
import Portfolio from './Portfolio';
import {  Route,Redirect, Switch, BrowserRouter} from 'react-router-dom';
ReactDOM.render( <BrowserRouter>
		<div>
			<div>
			<Switch>
			<Route path={"/portfolio"}   exact  component={Portfolio}/  >
			<Route path={"/dashboard"}  exact   component={App}/  >
			<Route path="*"  component={Errors}/>
			</Switch>
			</div>
		</div>
	    </BrowserRouter>,document.getElementById("root"));
