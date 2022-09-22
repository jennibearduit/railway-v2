import Seat from './Seat';

const Row = (props) => {
    const { travellers, rowId } = props;
    const takenSeatIds = travellers.map(t => t.id)
    const seatIds = Array
        .from({length: 5}, (_, i) => i+1)
        .map(num => {
            return (rowId === 1) ?  num : num+5
        })
    
    const style = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: "center"
    }

    return (
        <div id="deck" style={style}>
            {seatIds.map(id => {
                const isAvailable = !takenSeatIds.includes(id);
                return (
                    <Seat key={id} id={id} isAvailable={isAvailable}/>
            )})}
        </div>
    )
}

export default Row;