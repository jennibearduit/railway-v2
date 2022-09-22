import { PageState } from './PageStateEnum'
import Row from '../components/Row';
import '../styles/home.css';

const HomePage = (props) => {
    const { onChangePage:changePage, travellers } = props;
    const takenSeats = travellers.length;
    const style = {
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '2%',
        letterSpacing: '.1em',
        fontSize: '125%'
    }
    const buttonStyle = {
        alignItems: 'center',
        backgroundColor: 'white',
        border: 'solid',
        borderRadius: '5px',
        color: 'black',
        cursor: 'pointer',
        display: 'block',
        fontFamily: 'inherit',
        fontSize: '1.1rem',
        margin: '5% auto',
        padding: '1.3rem',
        width: '25%'
    }

    const buttonClickHandler = (e) => {
        e.preventDefault();
        if (takenSeats < 10) {
            changePage(PageState.FORM);
        } else {
            window.alert("The reservation is full!");
        }
    }

    return (
        <>
            <div style={style}>
                Available: {10 - takenSeats}
            </div>
            <Row travellers={travellers} rowId={1}/>
            <Row travellers={travellers} rowId={2}/>
            <button className="reservationButton" style={buttonStyle} onClick={buttonClickHandler}>
                Add Booking
            </button>
        </>
    )
}

export default HomePage;