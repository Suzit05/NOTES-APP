import { createContext, useState, useEffect } from "react";

const GrouplistContext = createContext();

const GrouplistProvider = ({ children }) => {
    const [addgroup, setaddgroup] = useState(() => {
        // Load groups from localStorage on initial render
        const storedGroups = localStorage.getItem("groups");
        return storedGroups ? JSON.parse(storedGroups) : []; // if no data then return to empty array
    });

    useEffect(() => {
        // addgroup jb v change hoga, localstorage m save ho jaega
        localStorage.setItem("groups", JSON.stringify(addgroup));
    }, [addgroup]);

    return (
        <GrouplistContext.Provider value={{ addgroup, setaddgroup }}>
            {children}
        </GrouplistContext.Provider>
    )
}

export { GrouplistContext, GrouplistProvider }