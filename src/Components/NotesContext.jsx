import { createContext, useState, useEffect } from "react";

const NotesContext = createContext()

const NotesProvider = ({ children }) => {
    const [showNotes, setshowNotes] = useState(false)
    const [selectedGroupName, setselectedGroupName] = useState([])
    const [isback, setisback] = useState(false)

    return (
        <NotesContext.Provider value={{ showNotes, setshowNotes, selectedGroupName, setselectedGroupName, isback, setisback }} >
            {children}
        </NotesContext.Provider >
    )
}

export { NotesContext, NotesProvider }