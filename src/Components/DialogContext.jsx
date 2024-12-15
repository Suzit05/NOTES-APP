import { createContext, useState } from "react";

const DialogContext = createContext();

const DialogProvider = ({ children }) => {
    const [showDialog, setshowDialog] = useState(false)



    return (
        <DialogContext.Provider value={{ showDialog, setshowDialog }}>
            {children}
        </DialogContext.Provider>
    )
}

export { DialogContext, DialogProvider }
