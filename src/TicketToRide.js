import AvailabilityPage from './pages/AvailabilityPage'
import HomePage from './pages/HomePage'
import ReservationListPage from './pages/ReservationListPage'
import './styles/topnav.css';

import { PageState } from './pages/PageStateEnum'
import { useState } from 'react';

function TicketToRide() {
    const [pageState, setPageState] = useState(PageState.HOME);
    const [travellers, setTravellers] = useState([]);

    // Delete handler
    // Page Handler

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
            <div class="topnav">
                <a className="logo" onClick={handleHomeClick}>Ticket To Ride .</a>
                <a id="homeBar" onClick={handleHomeClick}>Home</a>
                <a id="reservationListBar" onClick={handleReservationListClick}>Reservation List</a>
                <a id="availabilityBar" onClick={handleAvailabilityClick}>Availability</a>
            </div>
            <HomePage pageState={pageState} setPageState={setPageState} />
            <ReservationListPage pageState={pageState} setPageState={setPageState} />
            <AvailabilityPage pageState={pageState} setPageState={setPageState} />
        </>
    )
}

export default TicketToRide;