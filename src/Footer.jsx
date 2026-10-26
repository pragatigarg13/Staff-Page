import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-left">
                <Link to="/about">About Deakin</Link>
            </div>

            <div className="footer-center">
                <Link to="/connect">Connect with Us</Link>
            </div>

            <div className="footer-right">

                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>

                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>

            </div>

        </footer>
    );
}

export default Footer;