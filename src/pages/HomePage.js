import { PageState } from './PageStateEnum'
import Deck from '../components/Deck';

const HomePage = (props) => {
    const { pageState, onChangePage:changePage, travellers, onAdd:addTraveller } = props;

    if (pageState !== PageState.HOME) return;

    return (
        <>
            <Deck travellers={travellers}/>
        </>
    )
}

export default HomePage;