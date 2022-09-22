const Seat = (props) => {
    const { isAvailable, id } = props;
    const colour = isAvailable ? "#499167" : "#808080";

    const x = id <= 5 ? 1 : 2;
    const y = id <= 5 ? id: id-5;

    const style = {
        display: "block",
        left: `${y*12.5}%`,
        top: `${x*12.5}%`,
        backgroundColor: colour,
        color: "white",
        margin: "4% 2% 4% 2%",
        padding: "1% 2% 1% 2%",
        borderRadius: "5px 5px 5px 5px"
    }
    
    return (
        <div className="seat" style={style}>
        <p>{props.id}</p>
        </div>
    )
}

export default Seat;