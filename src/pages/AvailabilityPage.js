import { PageState } from "../PageStateEnum"

const AvailabilityPage = (props) => {
    const { pageState, setPageState } = props

    if (pageState !== PageState.AVAILABILITY) return;

    return (
        <>
            Availability
        </>
    )
}

export default AvailabilityPage;