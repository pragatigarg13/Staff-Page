import { getAuth, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {

    const auth = getAuth();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        if (auth.currentUser == null) {
            setMessage("User not logged in");
        }
        else {
            setMessage("Welcome " + auth.currentUser.email);
        }

    }, []);

    async function Logout() {

        await signOut(auth);
        navigate("/");
    }

    return (
        <>
            <h1>My Profile</h1>

            <h2>{message}</h2>

            <button onClick={Logout}>
                Logout
            </button>
        </>
    );
}

export default ProfilePage;
