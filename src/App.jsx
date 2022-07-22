import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import About from './pages/About';

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/donate' component={Donate} />
					<Route exact path='/about' component={About} />
					{/* <Route path='/' component={Error404} /> */}
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
