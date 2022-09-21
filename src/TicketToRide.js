import AvailabilityPage from "./pages/AvailabilityPage"
import HomePage from "./pages/HomePage"
import ReservationListPage from "./pages/ReservationListPage"
import './TicketToRide.css';
import { PageState } from "./PageStateEnum"
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
            <div class="topnav">
                <a class="logo" onClick={handleHomeClick}>Ticket To Ride .</a>
                <a class="passive" onClick={handleAvailabilityClick}>Availability</a>
                <a class="passive" onClick={handleReservationListClick}>Reservation List</a>
                <a class="active" onClick={handleHomeClick}>Home</a>
            </div>
            <HomePage pageState={pageState} setPageState={setPageState} />
            <ReservationListPage pageState={pageState} setPageState={setPageState} />
            <AvailabilityPage pageState={pageState} setPageState={setPageState} />
        </>
    )
}

export default TicketToRide;

{/* <>
<HomePage pageState={pageState} setPageState={setPageState}/>
<ReservationListPage pageState={pageState} setPageState={setPageState}/>
<AvailabilityPage pageState={pageState} setPageState={setPageState}/>
</> */}