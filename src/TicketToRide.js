import AvailabilityPage from "./pages/AvailabilityPage"
import HomePage from "./pages/HomePage"
import ReservationListPage from "./pages/ReservationListPage"
import './styles/TicketToRide.css';
import NavigationBar from './components/NavigationBar';
import Router from './routes/router';

import { PageState } from "./pages/PageStateEnum"
import { useState } from "react";

function TicketToRide() {
    const [pageState, setPageState] = useState(PageState.HOME);

    const handleAvailabilityClick = (e) => {
        e.preventDefault();
        setPageState(PageState.AVAILABILITY)
    }

    const handleReservationListClick = (e) => {
        e.preventDefault();
        setPageState(PageState.RESERVATION_LIST)
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        setPageState(PageState.HOME)
    }

    return (
        <>
            <NavigationBar />
        `   <Router />
            <HomePage pageState={pageState} setPageState={setPageState} />
            <ReservationListPage pageState={pageState} setPageState={setPageState} />
            <AvailabilityPage pageState={pageState} setPageState={setPageState} />
        </>
    )
}

export default TicketToRide;