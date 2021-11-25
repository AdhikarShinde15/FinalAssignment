import { SetStateAction } from "react";

export interface IOwnersModalProps {
    open: SetStateAction<boolean>
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
    id: string
}

export interface IEditOwner {
    ownerName: string
}