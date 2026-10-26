import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div>
            <div className="navigation-bar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </div>

            <Outlet />
        </div>
    );
}

export default Navigation;