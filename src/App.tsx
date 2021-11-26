import { useState } from "react"
import { ITrack } from "./Components/AddTrack/AddTrack.types"
import { IOwnersDetails, ITrainerDetails } from "./Contexts/Context.types";
import { Context } from "./Contexts/Context"
import AppRoutes from "./Routes/AppRoutes"

const App = () => {
  const [trackState, setTrackState] = useState<ITrack[]>([])
  const [TrainerDetails, setTrainerDetails] = useState<ITrainerDetails[]>([])
  const [OwnersDetails, setOwnersDetails] = useState<IOwnersDetails[]>([])

  return (
    <Context.Provider value={{
      trackState,
      TrainerDetails,
      OwnersDetails,
      setTrackState,
      setTrainerDetails,
      setOwnersDetails
    }}>
      <AppRoutes />
    </Context.Provider>
  )

}

export default App