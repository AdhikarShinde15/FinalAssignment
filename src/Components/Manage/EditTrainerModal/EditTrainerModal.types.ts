import { SetStateAction } from "react";

export interface ITrainerModalProps {
    open: SetStateAction<boolean>
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
    id: string
}

export interface IEditTrainer {
    trainerName: string
    trackName: string
}