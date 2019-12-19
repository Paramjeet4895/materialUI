import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import Signin from './Signin';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import history from './History';
import NotFound from './NotFound';

class App extends React.Component {

    render() {
        const token = localStorage.getItem('usertoken');
        console.log(token)
        //localStorage.setItem('usertoken', '');
        return (
            <Router history={history} forceRefresh={true}>
                <Switch>
                    <Route path="/" exact component={withRouter(() => (token ? <Dashboard /> : <Signin />))} />
                    <Route path="/dashboard" exact component={withRouter(() => (token ? <Dashboard /> : <Signin />))} />
                    <Route path="/signin" exact component={withRouter(() => (!token ? <Signin /> : <Dashboard />))} />
                    <Route path="/signup" component={withRouter(() => (!token ? <SignUp /> : <Dashboard />))} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>

        )
    }

};
export default withRouter(App);
