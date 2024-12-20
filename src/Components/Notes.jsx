import React, { useContext, useRef, useState, useEffect } from 'react'
import { GrouplistContext } from './GrouplistContext'
import { NotesContext } from './NotesContext';
import Grouplist from './Grouplist';


const Notes = () => {
    const { addgroup, setaddgroup } = useContext(GrouplistContext);
    const { selectedGroupName, setselectedGroupName } = useContext(NotesContext)
    const [isTyping, setisTyping] = useState(false)
    const [notes, setnotes] = useState([])
    const { isback, setisback } = useContext(NotesContext)


    const selectedGroup = addgroup.filter((group) => group.name === selectedGroupName);
    console.log("selectedGroup:", selectedGroup)
    const selectedGroupIndex = addgroup.findIndex((group) => group.name === selectedGroupName);//finding selected group index here.
    console.log("index of selected group:", selectedGroupIndex)


    const handleTyping = () => {
        console.log("someone is tying")
        setisTyping(true)


    }
    const notesRef = useRef();
    const addNotes = () => {
        const newNote = notesRef.current.value;
        setnotes((prevItem) => [...prevItem, newNote])
        console.log("notes:", notes)


        setaddgroup((prevGroups) =>
            prevGroups.map((group) =>
                group.name === selectedGroupName
                    ? { ...group, notes: [...group.notes, newNote] }
                    : group
            )
        );
        console.log(addgroup[selectedGroupIndex])
        notesRef.current.value = ''; // Clear the textarea
        setisTyping(false)

    }

    const handleKeyPress = (event) => { //enter button k liye
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
            addNotes()
        }
    }

    const backHandler = () => { //for mobile version
        setisback(true); // Show the group list
        setselectedGroupName(null); // Reset the selected group
        console.log("back button pr click ho rha ")
    };


    if (isback) {
        return (<div class="notes-outer-container" style={{ display: "none" }}></div>

        )
    }



    return (
        < div class="notes-outer-Container" >

            {selectedGroup.map((group, index) => {
                const words = group.name.split(" ");
                const firstInitial = words[0]?.charAt(0)?.toUpperCase() || "";
                const secondInitial = words[1]?.charAt(0)?.toUpperCase() || "";
                const initials = `${firstInitial} ${secondInitial}`.trim();

                return (
                    <div key={index} class="Navbar">
                        <svg onClick={backHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
                        <div class="list-dp" style={{ backgroundColor: group.color }}>
                            {initials}
                        </div><h1>{group.name}</h1>
                    </div>
                )
            })}




            <div className='notes-screen'>

                {selectedGroup[0]?.notes.map((note, index) => {
                    let d = new Date();

                    // Extract day, month, and year
                    let day = String(d.getDate()).padStart(2, "0");
                    let monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                    let month = monthNames[d.getMonth()]; // Get month name
                    let year = d.getFullYear();

                    // Extract hours and minutes with AM/PM format
                    let hours = d.getHours();
                    let minutes = String(d.getMinutes()).padStart(2, "0");
                    let ampm = hours >= 12 ? "PM" : "AM";
                    hours = hours % 12 || 12; // Convert to 12-hour format

                    // Combine date and time
                    let formattedDate = `${day}-${month}-${year}`;
                    let formattedTime = `${hours}:${minutes} ${ampm}`;

                    return (
                        <div key={index} class="each-notes">{note} <div class="date-div"><h6>{formattedDate} .{formattedTime}</h6> </div></div>

                    )

                })}

            </div>
            <div class="text-screen">
                <textarea onKeyUp={handleKeyPress} ref={notesRef} onChange={handleTyping} type="text" placeholder='Enter your text here.....' />

                {isTyping ? <svg onClick={addNotes} width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill="#001f8b" />
                </svg> : <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" fill="grey" />
                </svg>}



            </div>


        </div >
    )
}

export default Notes