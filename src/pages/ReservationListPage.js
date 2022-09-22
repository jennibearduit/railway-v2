import { PageState } from "./PageStateEnum"

const ReservationListPage = (props) => {
    const { pageState, onChangePage:changePage, onDelete:deleteTraveller, travellers } = props

    if (pageState !== PageState.RESERVATION_LIST) return;

    return (
        <>
            Reservation
        </>
    )
}

export default ReservationListPage;