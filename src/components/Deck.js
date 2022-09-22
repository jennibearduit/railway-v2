import Seat from './Seat';

const Deck = (props) => {
    const { travellers } = props;

    const seatIds = Array.from({length: 10}, (_, i) => i + 1)
    const takenSeatIds = travellers.map(t => t.id)

    const width = 5;
    const height = 2;

    const style = {
        width: `${width*20}em`,
        height: `${height*20}em`,
        display: `flex`,
        "justify-content": "center"
    }

    return (
        <div id="deck" style={style}>
            {
                seatIds.map(id => {
                    const isAvailable = !takenSeatIds.includes(id);
                    return (
                        <Seat key={id} id={id} isAvailable={isAvailable}/>
                    )
                })

            }
        </div>
    )
}

export default Deck;