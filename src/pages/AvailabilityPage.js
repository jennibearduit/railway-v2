import { PageState } from "./PageStateEnum"

const AvailabilityPage = (props) => {
    const { pageState, onChangePage, travellers } = props

    if (pageState !== PageState.AVAILABILITY) return;

    return (
        <>
            Availability
        </>
    )
}

export default AvailabilityPage;