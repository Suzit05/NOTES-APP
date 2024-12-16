import { createContext, useState } from "react";

const GrouplistContext = createContext();

const GrouplistProvider = ({ children }) => {
    const [addgroup, setaddgroup] = useState([])



    return (
        <GrouplistContext.Provider value={{ addgroup, setaddgroup }}>
            {children}
        </GrouplistContext.Provider>
    )
}

export { GrouplistContext, GrouplistProvider }