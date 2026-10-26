import "./header.css";

function Header(props) {
    return (
        <h1 className="head">{props.text}</h1>
    )
}

export default Header;