import { PageState } from "./PageStateEnum"
import { useState } from "react";

const FormPage = (props) => {
    const { onChangePage:changePage, travellers, onAdd:addTraveller } = props;
    const allSeatIds = Array
        .from({length: 10}, (_, i) => i+1);
    const takenSeatIds = travellers.map(t => t.id);
    const availableSeatIds = allSeatIds.filter(seat => !takenSeatIds.includes(seat));

    const [ id, setId ] = useState(Math.min(...availableSeatIds));
    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ passport, setPassport ] = useState('');
    
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


    const clickHandler = (e) => {
        e.preventDefault()
        console.log(id, name, phone, passport)
        if (!id || !name || !phone || !passport) {
            window.alert("All fields must be filled!");
        } else {
            const traveller = { id:id, name:name, phone:phone, passport:passport, date: new Date() }
            addTraveller(traveller);
        }
        changePage(PageState.HOME);
    }

    const idHandler = (e) => setId(e.target.value);
    const nameHandler = (e) => setName(e.target.value);
    const phoneHandler = (e) => setPhone(e.target.value);
    const passportHandler = (e) => setPassport(e.target.value);

    return (
        <>
            <form style={formStyle}>
                <label>Seat ID</label>
                <br></br>
                <select id="seatIds" name="seatIds" style={inputStyle} onChange={idHandler}>
                    {availableSeatIds.map(s => {
                        return (
                            <option key={s} value={s}>{s}</option>
                        )
                    })}
                </select>
                <br></br><label>Name</label><br></br>
                <input type="text" style={inputStyle} onChange={nameHandler}></input>

                <br></br><br></br><label>Phone Number</label><br></br>
                <input type="text" style={inputStyle} onChange={phoneHandler}></input>

                <br></br><br></br><label>Passport</label><br></br>
                <input type="text" style={inputStyle} onChange={passportHandler}></input>
            </form>
            <button onClick={clickHandler}>Submit</button>
        </>
    )
}

export default FormPage;