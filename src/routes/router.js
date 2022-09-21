import AvailabilityPage from "../pages/AvailabilityPage"
import HomePage from "../pages/HomePage"
import ReservationListPage from "../pages/ReservationListPage"
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routes>
    <Route exact="true" path="/" element={<HomePage />} />
    <Route path="/availability" element={<AvailabilityPage />} />
    <Route path="/reservationlist" element={<ReservationListPage />} />
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default Router;