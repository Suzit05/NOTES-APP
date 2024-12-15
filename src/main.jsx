import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DialogContext } from './Components/DialogContext.jsx'
import { DialogProvider } from "./Components/DialogContext.jsx"
import { GrouplistContext, GrouplistProvider } from './Components/GrouplistContext.jsx'
import { NotesContext, NotesProvider } from './Components/NotesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DialogProvider>

      <GrouplistProvider>
        <NotesProvider>
          <App />
        </NotesProvider>

      </GrouplistProvider>

    </DialogProvider>

  </StrictMode>,
)
