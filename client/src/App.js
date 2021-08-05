import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation, Home, History, Details, Error } from "./components";
import { Container } from 'react-bootstrap';

export default function App() {
	return (
		<>
		<Navigation/>
		<Container>
			<Router>
				<Route exact path='/' component={Home} />
				<Route path='/history' component={History} />
				<Route path='/details/:hash' component={Details} />
				<Route path='/error' component={Error} />
			</Router>
		</Container>
		</>
	);
}
