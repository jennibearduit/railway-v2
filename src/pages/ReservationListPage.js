import { PageState } from "./PageStateEnum"

const ReservationListPage = (props) => {
    const { pageState, onChangePage:changePage, onDelete:deleteTraveller, travellers } = props;

    return (
        <>
            Reservation
        </>
    )
}

export default ReservationListPage;