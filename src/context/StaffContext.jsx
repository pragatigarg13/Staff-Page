import { createContext, useEffect, useState } from "react";
import { fetchstaffdata } from "../utils/firebase";

export const StaffContext = createContext({
    staff: []
});

export function StaffProvider({ children }) {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const loadStaff = async () => {
            try {
                const staffmap = await fetchstaffdata();

                console.log("Staff data from Firestore:", staffmap);

                setStaff(Object.values(staffmap));
            } catch (error) {
                console.error("Unable to fetch staff data:", error);
            }
        };

        loadStaff();
    }, []);

    const value = { staff };

    return (
        <StaffContext.Provider value={value}>
            {children}
        </StaffContext.Provider>
    );
}

