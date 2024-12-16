import React, { useContext } from 'react'
import Grouplist from './Components/Grouplist'
import { DialogContext, DialogProvider } from './Components/DialogContext'
import Notes from './Components/Notes'
import { NotesContext } from './Components/NotesContext'
import { GrouplistContext } from './Components/GrouplistContext'



const App = () => {

  const { showDialog, setshowDialog } = useContext(DialogContext)
  const { showNotes, setshowNotes } = useContext(NotesContext)
  const { isback, setisback } = useContext(NotesContext)

  const handleAddBtn = () => {
    setshowDialog(true)
  }


  //  button visibility for mobile
  const isButtonVisible = !showNotes || isback;


  return (
    <>
      <div class="outerContainer">
        <div class='group-container'>
          <Grouplist></Grouplist>
        </div>

        {showNotes ? <Notes /> : <div class="screen-container">


          <div><img src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=khV-wMybAlHoHfx3~yScDwToEbraGlMowmij4vi0mVFkPFJTjZs2763ses6ZGLsyaL4LS4~w-dKyHHcOld8pe3CdbOS6jTJMayLUKjHAgwJtsCBj9L3ZHAUWDd9zYHgBDCo7wUx8wTOUveNnAlI6x8gk6fAVydOppYho2O~YjNOxSMujDrXZRMwgm3dcwErmmQ7zo9q9nxsComUoAF7Y8JedmtwlrT4OZAi36JPdmLZoIk9VQhjuQjB0-9HMgNfZK6PkvuRUsup4ZfVJaZobiG6dOx12UB-IUIjxyxrZ2Z5bIWPBzp4hNOAPN-QOanP0BbPNzxWYJHDqTcIqMPjnjA__" alt="" /></div>
          <div class="screen-text">
            <h1>Pocket Notes</h1>
            <h3>Send and receive messages without keeping your phone online. <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h3>
            <div class="endtoend">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"></path></svg>
              <h6>end-to-end encrypted</h6>
            </div>

          </div>
        </div>}

        {isButtonVisible && (
          <button onClick={handleAddBtn} className="add-btn-mobile-on">
            +
          </button>
        )}

      </div>
    </>
  )
}

export default App