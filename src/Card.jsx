
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.job}</p>
        </div>
    );
}

export default Card;