import { PageState } from "./PageStateEnum"

const ReservationListPage = (props) => {
    const { travellers, onDelete: deleteTraveller } = props;
    const formStyle = { margin: '10% auto' }
    const buttonStyle = { margin: '2% auto'}

    const deleteHandler = (id) => (e) => {
        e.preventDefault();
        console.log(id);
        deleteTraveller(id);
    }

    return (
        <table className="bordered-table" style={formStyle}>
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
                        <tr key={`row${t.id}`}>
                            <td key={`id${t.id}`}>{t.id}</td>
                            <td key={`name${t.id}`}>{t.name}</td>
                            <td key={`phone${t.id}`}>{t.phone}</td>
                            <td key={`passport${t.id}`}>{t.passport}</td>
                            <td key={`timestamp${t.id}`}>{t.timestamp}</td>
                            <td key={`button${t.id}`}>
                                <button onClick={deleteHandler(t.id)} style={buttonStyle}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ReservationListPage;