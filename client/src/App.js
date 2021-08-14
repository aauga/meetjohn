import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation, Home, History, Details, Error404 } from "./components";

export default function App() {
	return (
		<>
		<Navigation/>
		<Container>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/history' component={History} />
					<Route path='/details/:hash' component={Details} />
					<Route component={Error404} />
				</Switch>
			</Router>
		</Container>
		</>
	);
}
