import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { AuthScreen } from '../auth/AuthScreen';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            path={"/auth"}
            exact
            component={AuthScreen}
          />
          <Route 
            path={"/auth/login"}
            exact
            component={LoginScreen}
          />
          <Route 
            path={"/auth/register"}
            exact
            component={RegisterScreen}
          />
          
          <Redirect to={"/auth"}/>
        </Switch>
      </Router>
    </>
  )
}