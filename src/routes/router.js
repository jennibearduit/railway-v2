import AvailabilityPage from "../pages/AvailabilityPage"
import HomePage from "../pages/HomePage"
import ReservationListPage from "../pages/ReservationListPage"
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routes>
    <Route exact path="/availability" component={AvailabilityPage} />
    <Route exact path="/reservationlist" component={ReservationListPage} />
    <Route exact path="/" component={HomePage} />
  </Routes>
);

export default Router;