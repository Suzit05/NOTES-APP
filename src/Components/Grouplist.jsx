import React, { useContext, useRef } from 'react'
import Dialogcard from './Dialogcard'
import { useState } from 'react'
import { DialogContext, DialogProvider } from './DialogContext'
import { GrouplistContext, GrouplistProvider } from './GrouplistContext'
import { NotesContext, NotesProvider } from './NotesContext'



const Grouplist = () => {
    const { showDialog, setshowDialog } = useContext(DialogContext)
    const { addgroup, setaddgroup } = useContext(GrouplistContext)
    const { showNotes, setshowNotes } = useContext(NotesContext)
    const { selectedGroupName, setselectedGroupName } = useContext(NotesContext)
    const { isback, setisback } = useContext(NotesContext)




    // Create an array of refs
    const groupRefs = useRef([]);

    const handleEachGroup = (index) => {
        const groupElement = groupRefs.current[index];
        if (groupElement) {
            setselectedGroupName(addgroup[index]?.name)
            console.log("Group name:", selectedGroupName);
        }
        setshowNotes(true);
        setisback(false);

    };






    return (
        <div class='grouplist-outer' >
            <h1>Pocket Notes</h1>
            <div class='groupnames-list'>
                <ul> {addgroup.map((group, index) => {
                    const words = group.name.split(" ");
                    const firstInitial = words[0]?.charAt(0)?.toUpperCase() || "";
                    const secondInitial = words[1]?.charAt(0)?.toUpperCase() || "";
                    const initials = `${firstInitial} ${secondInitial}`.trim();
                    return (
                        <div ref={(el) => (groupRefs.current[index] = el)}
                            onClick={() => handleEachGroup(index)}
                            class="list-outer" key={index}>
                            <div class="list-dp" style={{ backgroundColor: group.color }}>
                                {initials}
                            </div>
                            {group.name}</div>)
                })}</ul>

            </div >

            {showDialog && <Dialogcard ></Dialogcard>}

        </div >
    )
}

export default Grouplist