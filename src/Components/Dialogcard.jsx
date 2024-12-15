import React, { useState, useContext, useRef } from 'react'
import { DialogContext, DialogProvider } from './DialogContext'
import { GrouplistContext, GrouplistProvider } from './GrouplistContext'

const Dialogcard = () => {
    const { showDialog, setshowDialog } = useContext(DialogContext)
    const { addgroup, setaddgroup } = useContext(GrouplistContext)
    const inputRef = useRef();

    const [selectedColor, setselectedColor] = useState("")

    const handleColorSelect = (color) => {
        setselectedColor(color);
    };

    const handleCreate = () => {
        const inputname = inputRef.current.value;
        if (inputname && selectedColor) {
            setaddgroup((prevItem) => [...prevItem, { name: inputname, color: selectedColor, notes: [] }]);
            setshowDialog(false); // Close dialog after creation
            console.log("addgroup", { addgroup })
        }
        else {
            alert("Please enter a group name and select a color!");
        }

    }

    const dialogRef = useRef();
    const closeDialog = (e) => {
        if (dialogRef.current === e.target) {
            setshowDialog(false)
            console.log(showDialog)
        }
    }


    return (
        <div ref={dialogRef} onClick={closeDialog} className='dialog-overlay'>
            <div class="dialog-outer">
                <div><h2>Create New group</h2></div>
                <div class="group-name-container">
                    <h3>Group name</h3>
                    <input ref={inputRef} type="text" placeholder='Enter group name' />
                </div>
                <div className='color-container'>
                    <h3>Choose colour</h3>
                    <button class="color-btn-purple" onClick={() => handleColorSelect("#B48BFA")} style={{ backgroundColor: "#B48BFA" }} ></button>
                    <button class="color-btn-pink" style={{ backgroundColor: "#FF79F2" }}
                        onClick={() => handleColorSelect("#FF79F2")} ></button>
                    <button class="color-btn-cyan" style={{ backgroundColor: "#43E6FC" }}
                        onClick={() => handleColorSelect("#43E6FC")} ></button>
                    <button class="color-btn-brown" style={{ backgroundColor: "#F19576" }}
                        onClick={() => handleColorSelect("#F19576")} ></button>
                    <button class="color-btn-darkblue" style={{ backgroundColor: "#0047FF" }}
                        onClick={() => handleColorSelect("#0047FF")} ></button>
                    <button class="color-btn-skyblue" style={{ backgroundColor: "#6691FF" }}
                        onClick={() => handleColorSelect("#6691FF")} ></button>
                </div>
                <div class='createbtn-div'>
                    <button onClick={handleCreate} class='createBtn'>Create </button>
                </div>

            </div>

        </div>

    )
}

export default Dialogcard