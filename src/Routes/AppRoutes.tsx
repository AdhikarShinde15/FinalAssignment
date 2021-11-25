import { Login, Dashboard } from "@mui/icons-material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Manage from "../Components/Manage/ManageMain/Manage"
import ManageOwner from "../Components/Manage/ManageOwner/ManageOwner"
import ManageTrainer from "../Components/Manage/ManageTrainer/ManageTrainer"

const AppRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="dashboard"
                element={<Dashboard />} />
            <Route path="manage" element={<Manage />}>
                <Route path="trainer" element={<ManageTrainer />} />
                <Route path="owner" element={<ManageOwner />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default AppRoutes
