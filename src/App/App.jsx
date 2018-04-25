import React from 'react';
import { Router, Route , Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components'
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage'

class App extends React.Component
{
    constructor(props){
        super(props);

        const { dispatch } = this.props;

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }


    render(){
            const {alert} = this.props;
            return (
                <div>
                    {alert.message && 
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history = {history}>
                        <div>
                            
                            <Switch>
                                <PrivateRoute path="/home" component={ HomePage } />
                                <Route path="/login" component={ wrapHOC(LoginPage) } />
                                <Route path="/register" component={wrapHOC(RegisterPage)} />
                                <Redirect from="/" to="home"/>
                            </Switch>   
                        </div>
                    </Router>
                </div>
            );
    }
}

const wrapHOC = (WrappedComponent) => (props) => (
    <div className="jumbotron">
        <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
                <WrappedComponent {...props}/>
            </div>
        </div>
    </div>
  );

//take piece of data(state) from the store and pass it to the component as props 
function mapStateToProps(state) {

    //alert is part of the data from the store 
    const { alert } = state;
    return {
        alert
    };
}

//export the App which is already connected to the store and using alert 
const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
