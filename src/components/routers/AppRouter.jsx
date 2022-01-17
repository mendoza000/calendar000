import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthRouter } from './AuthRouter';
import { CalendarRouter } from './CalendarRouter';

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>

          <Route 
            path="/"
            exact
            component={CalendarRouter}
          />
          <Route 
            path="/auth"
            component={AuthRouter}
          />

        </Switch>
      </Router>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </>
  )
}
