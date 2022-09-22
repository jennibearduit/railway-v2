import { PageState } from "./PageStateEnum"

const ReservationListPage = (props) => {
    const { onChangePage: changePage, travellers, onDelete: deleteTraveller } = props;

    return (
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>Seat ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Passport Number</th>
                    <th>Booking Time</th>
                </tr>
            </thead>
            <tbody>
                {travellers.map(t => {
                    return (
                        <tr>
                            <td>{t.id}</td>
                            <td>{t.name}</td>
                            <td>{t.phone}</td>
                            <td>{t.passport}</td>
                            <td>{t.timestamp}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ReservationListPage;