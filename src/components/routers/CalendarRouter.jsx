import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';
import { CalendarScreen } from '../calendar/CalendarScreen';

export const CalendarRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            path={"/"}
            exact
            component={CalendarScreen}
          />

          <Redirect to={"/"} />
        </Switch>
      </Router>
    </>
  )
}