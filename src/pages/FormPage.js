import { PageState } from "./PageStateEnum"

const FormPage = (props) => {
    const { pageState, onChangePage, travellers } = props

    if (pageState !== PageState.FORM) return;

    return (
        <>
            Form
        </>
    )
}

export default FormPage;