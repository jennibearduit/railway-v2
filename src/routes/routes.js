import AvailabilityPage from "./pages/AvailabilityPage"
import HomePage from "./pages/HomePage"
import ReservationListPage from "./pages/ReservationListPage"
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/availability" component={AvailabilityPage} />
    <Route exact path="/reservationlist" component={ReservationListPage} />
    <Route path="/" component={HomePage} />
  </Switch>
);

export default Routes;