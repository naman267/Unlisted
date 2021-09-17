import React, { Component } from 'react'
import Admin from './admin/app/App'
import Web from './REACT/app'
import Login from './Login/login'
import { Switch,Route, Redirect } from 'react-router-dom'
function main() {
    return(
        
        <Switch>

        <Route exact path="/web"  component={Web}/>
        <Route  exact path="/login" component={ Login } />
        <Route  path="/dashboard" component={Admin}/>
        <Route  path="/basic-ui/buttons" component={ Admin } />
        
       
       <Route exact path="/basic-ui/buttons" component={Admin } />
       <Route path="/basic-ui/dropdowns" component={ Admin} />
       <Route path="/basic-ui/typography" component={ Admin } />

       <Route path="/form-Elements/basic-elements" component={Admin} />

       <Route path="/tables/basic-table" component={ Admin } />

       <Route path="/icons/mdi" component={ Admin } />

       <Route path="/charts/chart-js" component={ Admin} />


       <Route path="/user-pages/login-1" component={ Admin } />
       <Route path="/user-pages/register-1" component={ Admin} />

       <Route path="/error-pages/error-404" component={ Admin } />
       <Route path="/error-pages/error-500" component={ Admin } />


       <Redirect to="/dashboard" />
       </Switch>
        

        
    )
}
export default main
