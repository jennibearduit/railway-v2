import { PageState } from "../PageStateEnum"

const ReservationListPage = (props) => {
    const { pageState, setPageState } = props

    if (pageState !== PageState.RESERVATION_LIST) return;

    return (
        <>
            Reservation
        </>
    )
}

export default ReservationListPage;