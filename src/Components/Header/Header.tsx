import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styles from "../Header/Header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
            <Button variant="outlined"><Link className={styles.links} to="/">ETLP</Link></Button>
            <span>
                <span className={styles.btn}>
                <Button variant="outlined"><Link className={styles.links} to="/dashboard">Home</Link></Button>
                </span>
                <span className={styles.btn}>
                <Button variant="outlined"><Link className={styles.links} to="/manage">Manage</Link></Button>
                </span>
            </span>
        </div>
    )
}

export default Header
