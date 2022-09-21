import { PageState } from "../PageStateEnum"

const HomePage = (props) => {
    const { pageState, setPageState } = props

    if (pageState !== PageState.HOME) return;

    return (
        <>
            Home
        </>
    )
}

export default HomePage;