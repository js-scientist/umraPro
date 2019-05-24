import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Errors from './views/Errors';
import Portfolio from './Portfolio';
import Register from './Register';
import Login from './Login';
import {  Route , Switch, BrowserRouter} from 'react-router-dom';
const Apps = (props) => {
      return (
        <App
          {...props}
        />
      );
    }
ReactDOM.render( <BrowserRouter>
                		<div>
                			<div>
                  			<Switch>
                    			<Route path={"/"}   exact  component={Portfolio}/  >
                    			<Route path={"/login"}   exact  component={Login}/  >
                    			<Route path={"/signup"}   exact  component={Register}/  >
                    			<Route path={"/dashboard"}      component={Apps}/  >
                    			<Route path={"/error"}      component={Errors}/  >
                    			<Route path="*"  component={Errors}/>
                  			</Switch>
                			</div>
                		</div>
                 </BrowserRouter>,document.getElementById("root"));
serviceWorker.unregister();
