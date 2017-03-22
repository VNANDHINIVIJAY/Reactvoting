import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store,{history} from './store';

import App from './components/App';
import Boyleader from './components/Boyleader';
import Girlleader from './components/Girlleader';

ReactDOM.render(
<Provider store={store}>
   <Router history={browserHistory}>
       
        <Route path="/" component={App}>
         <Route path="/boy" component={Boyleader}/>
         <Route path="/girl" component={Girlleader}/>         
        </Route>       
    </Router>
    </Provider>,document.getElementById('root')
);