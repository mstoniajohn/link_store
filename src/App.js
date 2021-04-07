import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AddLinks from './components/pages/AddLinks';

// const

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/create">
						<AddLinks />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
