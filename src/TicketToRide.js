import AvailabilityPage from "./pages/AvailabilityPage"
import HomePage from "./pages/HomePage"
import ReservationListPage from "./pages/ReservationListPage"
import './styles/topnav.css';

import { PageState } from "./pages/PageStateEnum"
import { useState } from "react";

const NUM_SEATS = 10;

function TicketToRide() {
    const [pageState, setPageState] = useState(PageState.HOME);
    const [travellers, setTravellers] = useState([]);

    function initTravellers() {
        setTravellers(
            Array
                .from({ length: NUM_SEATS }, (_, i) => i + 1)
                .map(num => {
                    return ({
                        SERIAL_NO: num,
                        NAME: '',
                        PHONE: '',
                        TIMESTAMP: '',
                        AVAILABILITY: true
                    })
                })
        )
    }

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