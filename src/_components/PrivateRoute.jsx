import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component : Component, ...rest}) => {

    console.log(Component);

    return (
        <Route { ...rest } 
            render = { 
                props =>  (
                    localStorage.getItem('user')
                    ?  <Component {...props} />
                    : <Redirect to = {{ pathname: '/login' , state : {from : props.location}}} />
                )
            }
        />
    )
}

/* 
    - pass in ...rest as a spread shortcut
    - component : Component  -> find component property defined on props 
      and assign to new location in state called Component
    - ...rest -> take all remaining properties and collect them in argument called rest

    - inline render Route components , if user found in localStorage , return the component passed in 
      else redirect to login 

    - render prop is used here to avoid component for PrivateRoute remounted but instead the same component is 
    updated and the component's props also passed along 
*/

