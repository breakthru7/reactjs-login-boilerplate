import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini">App</span>
                    <span className="logo-lg">App</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">     
                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                
                                    <span class="hidden-xs">{ this.props.username }</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <p>{ this.props.username } </p>
                                    </li>
                                    <li class="user-body">
                                    </li>
                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <a href="#" class="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div class="pull-right">
                                            <Link to="/login" className="btn btn-default btn-flat">Logout</Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}