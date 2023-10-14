import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={PropertyList} />
                <Route path="/property/:id" component={PropertyDetails} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
}

export default App;
