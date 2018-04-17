import React, {Component} from 'react';

export class Sidebar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">    
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active">
                            <a href="/link1">
                                <i className="fa fa-files-o"></i>
                                <span>Link 1</span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="/link1">
                                <i className="fa fa-files-o"></i>
                                <span>Link 1</span>
                            </a>
                        </li>
                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Drop down links</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/page1"><i className="fa fa-circle-o"></i> sub-link 1</a></li>
                            <li><a href="pages/page2"><i className="fa fa-circle-o"></i> sub-link 2</a></li>
                        </ul>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}