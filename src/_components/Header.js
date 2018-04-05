import React, {Component} from 'react';

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
                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}