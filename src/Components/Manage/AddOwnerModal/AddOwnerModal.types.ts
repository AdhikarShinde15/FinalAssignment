import { SetStateAction } from "react";

export interface IOwnerModalProps {
    open: SetStateAction<boolean>
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IAddOwner {
    ownersName: string
}