import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    signinwithGoogle,
    loginwithemailandpassword,
    createUserDoc
} from "../utils/firebase";

import { UserContext } from "../context/UserContext";

function Login() {

    const navigate = useNavigate();

    const { currentuser, setcurrentuser } = useContext(UserContext);

    console.log(currentuser);

    const [contact, setContact] = useState({
        email: "",
        password: ""
    });

    const { email, password } = contact;

    function handleChange(event) {

        const { name, value } = event.target;

        setContact((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            };
        });
    }

    async function handleLogin() {

        try {

            const { user } = await loginwithemailandpassword(
                email,
                password
            );

            setcurrentuser(user);

            console.log("Login successful:", user);

            navigate("/profile");

        } catch (error) {

            console.log("Login error:", error.message);

        }
    }

    async function handleGoogleLogin() {

        try {

            const response = await signinwithGoogle();

            const { user } = response;

            await createUserDoc(user, {});

            setcurrentuser(user);

            console.log("Google login successful:", user);

            navigate("/profile");

        } catch (error) {

            console.log("Google login error:", error.message);

        }
    }

    return (
        <>
            <h1>Login</h1>

            <label>Enter Email</label>

            <input
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
            />

            <br />
            <br />

            <label>Enter Password</label>

            <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
            />

            <br />
            <br />

            <button onClick={handleLogin}>
                Login
            </button>

            <br />
            <br />

            <button onClick={handleGoogleLogin}>
                Continue with Google
            </button>

            <br />
            <br />

            <Link to="/signup">
                Instead sign up
            </Link>
        </>
    );
}

export default Login;
