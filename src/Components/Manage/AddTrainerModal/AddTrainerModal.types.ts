import { SetStateAction } from "react";

export interface ITrainerModalProps {
    open: SetStateAction<boolean>
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IAddTrainer {
    trainerName: string
    trackName: string
}