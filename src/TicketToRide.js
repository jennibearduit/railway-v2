import FormPage from './pages/FormPage'
import HomePage from './pages/HomePage'
import ReservationListPage from './pages/ReservationListPage'
import './styles/topnav.css';
import travellersService from './services/travellers'
import { PageState } from './pages/PageStateEnum'
import { useState, useEffect } from 'react';

function TicketToRide() {
    const [pageState, setPageState] = useState(PageState.HOME);
    const [travellers, setTravellers] = useState([]);

    useEffect(() => {
        travellersService
            .getAllTravellers()
            .then(res => setTravellers(res));
    }, [])

    const changePageState = (state) => setPageState(state) // for components
    const pageChangeHandler = (state) => () => setPageState(state) // for nav bar

    const deleteTravellerHandler = (id) => () => {
        console.log(`delete traveller ${id}`)
        travellersService
            .deleteTraveller(id)
            .then(() => setTravellers(travellers.filter(t => t.id !== id)))
    }

    const addTravellerHandler = (traveller) => {
        travellersService
            .addTraveller(traveller)
            .then(res => setTravellers(travellers.concat(res)))
    }

    return (
        <>
            <div className="topnav">
                <a className="logo" onClick={pageChangeHandler(PageState.HOME)}>Ticket To Ride .</a>
                <a id="homeBar" onClick={pageChangeHandler(PageState.HOME)}>Home</a>
                <a id="reservationListBar" onClick={pageChangeHandler(PageState.RESERVATION_LIST)}>Reservation List</a>
            </div>
            {
                pageState === PageState.HOME &&
                <HomePage onChangePage={changePageState} travellers={travellers} show={travellers}/>
            }
            {
                pageState === PageState.RESERVATION_LIST &&
                <ReservationListPage onChangePage={changePageState} travellers={travellers} onDelete={deleteTravellerHandler}
                />
            }
            {   
                pageState === PageState.FORM &&
                <FormPage onChangePage={changePageState} travellers={travellers} onAdd={addTravellerHandler}/>
            }
        </>
    )
}

export default TicketToRide;