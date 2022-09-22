import AvailabilityPage from './pages/AvailabilityPage'
import HomePage from './pages/HomePage'
import ReservationListPage from './pages/ReservationListPage'
import './styles/topnav.css';
import travellersService from './services/travellers'
import { PageState } from './pages/PageStateEnum'
import { useState, useEffect } from 'react';

function TicketToRide() {
    const [pageState, setPageState] = useState(PageState.HOME);
    const [travellers, setTravellers] = useState([]);

    const hook = () => {
        travellersService
            .getAllTravellers()
            .then(res => {
                setTravellers(res)
            });
    }
    useEffect(hook, [])

    const deleteTravellerHandler = id => () => {
        console.log(`delete traveller ${id}`)
        travellersService
            .deleteTraveller(id)
            .then(() => {
                travellersService
                    .getAllTravellers()
                    .then (arr => setTravellers(arr))
            })
    }

    const addTravellerHandler = traveller => () => {
        console.log(`add traveller ${traveller.id}`)
        travellersService
            .addTraveller(traveller)
            .then(() => {
                travellersService
                    .getAllTravellers()
                    .then (arr => setTravellers(arr))
            })
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
            <div className="topnav">
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