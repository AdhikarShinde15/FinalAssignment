import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ITack } from "./Components/AddTrack/AddTrack.types"
import Dashboard from "./Components/Dashboard/Dashboard"
import Login from "./Components/Login/Login"
import Manage from "./Components/Manage/Manage"
import ManageOwner from "./Components/Manage/ManageOwner/ManageOwner"
import ManageTrainer from "./Components/Manage/ManageTrainer/ManageTrainer"

const App = () => {
 const [trackState, setTrackState] = useState<ITack[]>([])
    console.log(trackState);
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="dashboard" 
              element={<Dashboard 
                        trackState={trackState} 
                        setTrackState={setTrackState}/>}/>
       <Route path="manage" element={<Manage/>}>
         <Route path="trainer" element={<ManageTrainer />}/>
         <Route path="owner" element={<ManageOwner />}/>
       </Route>                
     </Routes>
    </BrowserRouter>
  )

}

export default App

