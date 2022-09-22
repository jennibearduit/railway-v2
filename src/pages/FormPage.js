import { PageState } from "./PageStateEnum"

const FormPage = (props) => {
    const { pageState, onChangePage, travellers } = props;
    const formStyle = {
        margin: '50px 20px 20px 20px',
        textAlign: 'center'
    }
    const inputStyle = {
        boxSizing: 'border-box',
        borderRadius: '5px',
        margin: '20px 0px',
        padding: '12px 20px',
        width: '500px'
    }

    const allSeatIds = Array
        .from({length: 10}, (_, i) => i+1)
    const takenSeatIds = travellers.map(t => t.id)
    const availableSeatIds = allSeatIds.filter(seat => !takenSeatIds.includes(seat))
    console.log(availableSeatIds)

    return (
        <>
            <form style={formStyle}>
                <label>Seat ID</label>
                <br></br>
                <select id="seatIds" name="seatIds" style={inputStyle}>
                    {
                        availableSeatIds.map(s => {
                            return (
                                <option value={s}>{s}</option>
                            )
                        })
                    }
                </select>
                <br></br>
                <label>Name</label>
                <br></br>
                <input type="text" style={inputStyle}></input>

                <br></br><br></br>
                <label>Phone Number</label>
                <br></br>
                <input type="text" style={inputStyle}></input>

                <br></br><br></br>
                <label>Passport</label>
                <br></br>
                <input type="text" style={inputStyle}></input>
            </form>
        </>
    )
}

export default FormPage;