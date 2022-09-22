import { PageState } from "./PageStateEnum"

const HomePage = (props) => {
    const { pageState, onChangePage:changePage, travellers, onAdd:addTraveller } = props;

    if (pageState !== PageState.HOME) return;

    return (
        <>
            Home
        </>
    )
}

export default HomePage;