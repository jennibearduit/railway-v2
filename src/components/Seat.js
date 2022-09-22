const Seat = (props) => {
    const { isAvailable, id } = props;
    const colour = isAvailable ? "#499167" : "#808080";

    const x = id <= 5 ? 1 : 2;
    const y = id <= 5 ? id: id-5;

    const style = {
        position: "absolute",
        left: `${y*10}em`,
        top: `${x*10}em`,
        backgroundColor: colour,
        color: "white",
        margin: "2% 2% 2% 2%",
        padding: "1.5% 3% 1.5% 3%",
        "border-radius": "5px 5px 5px 5px"
    }
    return (
        <div className="seat" style={style}>
        <p>{props.id}</p>
        </div>
    )
}

export default Seat;