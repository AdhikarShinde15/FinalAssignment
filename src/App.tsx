import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ITack } from "./Components/AddTrack/AddTrack.types"
import Dashboard from "./Components/Dashboard/Dashboard"
import Login from "./Components/Login/Login"
import Manage from "./Components/Manage/ManageMain/Manage"
import ManageOwner from "./Components/Manage/ManageOwner/ManageOwner"
import ManageTrainer from "./Components/Manage/ManageTrainer/ManageTrainer"

export interface ITrainerDetails {
  trainerName: string
  trackName: string
}
export interface IOwnersDetails {
  ownersName: string
  id: string
}

export interface ContextData {
  OwnersDetails: IOwnersDetails[]
  TrainerDetails: ITrainerDetails[]
  setTrainerDetails: React.Dispatch<React.SetStateAction<ITrainerDetails[]>>
  setOwnersDetails: React.Dispatch<React.SetStateAction<IOwnersDetails[]>>
}

export const ContextDefaultValue: ContextData = {
  TrainerDetails: [],
  OwnersDetails: [],
  setTrainerDetails: () => null,
  setOwnersDetails: () => null
}

export const Context = createContext<ContextData>(ContextDefaultValue);

const App = () => {
  const [trackState, setTrackState] = useState<ITack[]>([])
  const [TrainerDetails, setTrainerDetails] = useState<ITrainerDetails[]>([])
  const [OwnersDetails, setOwnersDetails] = useState<IOwnersDetails[]>([])
  console.log(OwnersDetails);
  console.log(trackState)
  
  return (
    <Context.Provider value={{
      TrainerDetails,
      OwnersDetails,
      setTrainerDetails,
      setOwnersDetails
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard"
            element={<Dashboard
              trackState={trackState}
              setTrackState={setTrackState} />} />
          <Route path="manage" element={<Manage />}>
            <Route path="trainer" element={<ManageTrainer />} />
            <Route path="owner" element={<ManageOwner />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )

}

export default App

