import { useState } from "react";
import { Link } from "react-router-dom";

import {
    signupwithemailandpassword,
    createUserDoc
} from "../utils/firebase";


function SignUp() {

    const [contact, setContact] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    const {
        displayName,
        email,
        password,
        confirmPassword
    } = contact;


    function handleChange(event) {

        const { name, value } = event.target;

        setContact(function(previousValue) {

            return {
                ...previousValue,
                [name]: value
            };

        });
    }


    async function handleSignup() {

        if (password !== confirmPassword) {

            alert("Passwords do not match");
            return;

        }


        try {

            const { user } =
                await signupwithemailandpassword(email, password);

            console.log("Account created:", user);


            await createUserDoc(user, {
                displayName: displayName
            });


            console.log("User document created");

        } catch (error) {

            console.log(
                "Error in creating user:",
                error.message
            );

        }
    }


    return (
        <>
            <h1>Sign Up</h1>


            <label>Enter Name </label>

            <input
                name="displayName"
                type="text"
                placeholder="Enter name"
                value={displayName}
                onChange={handleChange}
            />


            <br />
            <br />


            <label>Enter Email </label>

            <input
                name="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
            />


            <br />
            <br />


            <label>Enter Password </label>

            <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
            />


            <br />
            <br />


            <label>Confirm Password </label>

            <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleChange}
            />


            <br />
            <br />


            <button onClick={handleSignup}>
                Sign Up
            </button>


            <br />
            <br />


            <Link to="/login">
                Already have an account? Login
            </Link>

        </>
    );
}


export default SignUp;