import React from 'react';
import logo from './logo.svg';
import './App.css';
import about from './Components/about';
import home from './Components/home';
import project from './Components/project';
import contact from './Components/contact';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
				<div className="App">

        <Navbar fixed="top" variant="dark" className="navbar">
						<div className="logo">
            <Link to="/" className="head" style={{ textDecoration: 'none' }}>Stephanie Yu</Link>
            <Link to="/" className="link" style={{ textDecoration: 'none' }}>Home</Link>
						<Link to="about" className="link" style={{ textDecoration: 'none' }}>About Me</Link>
            <Link to="project" className="link" style={{ textDecoration: 'none' }}>Projects</Link>
            <Link to="contact" className="link" style={{ textDecoration: 'none' }}>Contact Me</Link>
						</div>
				</Navbar>

					<header className="App-header"></header>
					<Switch>
						<Route exact path="/" component={home} />
						<Route path="/about" component={about} />
            <Route path="/project" component={project} />
            <Route path="/contact" component={contact} />
					</Switch>
				</div>
			</Router>
  );
}

export default App;
