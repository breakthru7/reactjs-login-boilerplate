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
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options 1</span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options 2</span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Sample Drop-down</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                            <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                        </ul>
                        </li>
                        <li>
                        <ul className="treeview-menu">
                            <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                            <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                        </ul>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}