import React, {Component} from 'react';

export class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Dashboard</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                Content Here
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Reports</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                Content Here
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}