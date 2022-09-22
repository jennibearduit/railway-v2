import { PageState } from './PageStateEnum'
import Row from '../components/Row';

const HomePage = (props) => {
    const { pageState, onChangePage:changePage, travellers, onAdd:addTraveller } = props;

    if (pageState !== PageState.HOME) return;
    const takenSeats = travellers.length;
    const style = {
        textAlign: 'center', 
        marginTop: '5%',
        marginBottom: '2%',
        letterSpacing: '.1em',
        fontSize: '125%'
    }

    return (
        <>
            <div style={style}>
                Available: {10-takenSeats}
            </div>
            <Row travellers={travellers} rowId={1}/>
            <Row travellers={travellers} rowId={2}/>
        </>
    )
}

export default HomePage;