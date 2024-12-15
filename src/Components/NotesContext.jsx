import { createContext, useState } from "react";

const NotesContext = createContext()

const NotesProvider = ({ children }) => {
    const [showNotes, setshowNotes] = useState(false)
    const [selectedGroupName, setselectedGroupName] = useState([])

    return (
        <NotesContext.Provider value={{ showNotes, setshowNotes, selectedGroupName, setselectedGroupName }} >
            {children}
        </NotesContext.Provider >
    )
}

export { NotesContext, NotesProvider }