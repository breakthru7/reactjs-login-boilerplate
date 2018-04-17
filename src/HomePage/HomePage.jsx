import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Router, Route , Switch } from 'react-router-dom';
import { Header , Sidebar , Dashboard } from '../_components'
import { DocumentPage } from '../DocumentPage'
import { history } from '../_helpers';

class HomePage extends React.Component {
    
    constructor(props){
        super(props); 
    }
    
    componentDidMount() {
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        const match = this.props.match;

        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <Header username={ user.username } />
                <Sidebar />

                <div className="content-wrapper">
                    <section className="content-header">
                        <Switch>
                            <Route path= "/home/document" component= { DocumentPage } />
                            <Route component= { Dashboard } />
                        </Switch>

                    </section>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };