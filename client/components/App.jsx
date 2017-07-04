import React from 'react';
import Homepage from './Homepage.jsx';
import Loginpage from '../containers/Loginpage.jsx';
import Mainpage from '../containers/Mainpage.jsx';
import Signup from '../containers/Signuppage.jsx';

import {Route, Switch} from 'react-router-dom';

const main = (
	<div>
		<Switch>
	      <Route exact path='/' component={Homepage}/>
	      <Route path='/Login' component={Loginpage}/>
	      <Route path="/Mainpage" component={Mainpage}/>
	      <Route path='/Signup' component={Signup}/>
	    </Switch>
	</div>
);

class App extends React.Component {
    render() {
      return (
         <div>
            {main}
         </div>
      );
   }
}

export default App;