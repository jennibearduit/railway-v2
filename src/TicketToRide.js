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

    const hook = () => {
        travellersService
            .getAllTravellers()
            .then(res => {
                setTravellers(res)
            });
    }
    useEffect(hook, [])

    const changePageState = (state) => {
        console.log(`change page state to ${state}`)
        setPageState(state)
    }

    const pageChangeHandler = (state) => () => {
        console.log(`change page state to ${state}`)
        setPageState(state)
    }

    const deleteTravellerHandler = id => () => {
        console.log(`delete traveller ${id}`)
        travellersService
            .deleteTraveller(id)
            .then(() => {
                travellersService
                    .getAllTravellers()
                    .then(arr => setTravellers(arr))
            })
    }

    const addTravellerHandler = traveller => () => {
        console.log(`add traveller ${traveller.id}`)
        travellersService
            .addTraveller(traveller)
            .then(() => {
                travellersService
                    .getAllTravellers()
                    .then(arr => setTravellers(arr))
            })
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
                <HomePage
                    pageState={pageState}
                    onChangePage={changePageState}
                    travellers={travellers}
                    onAdd={addTravellerHandler}
                />
            }
            {
                pageState === PageState.RESERVATION_LIST &&
                <ReservationListPage
                    pageState={pageState}
                    onChangePage={changePageState}
                    travellers={travellers}
                    onDelete={deleteTravellerHandler}
                />
            }
            {   
                pageState === PageState.FORM &&
                <FormPage
                    pageState={pageState}
                    onChangePage={changePageState}
                    travellers={travellers}
                />
            }
        </>
    )
}

export default TicketToRide;