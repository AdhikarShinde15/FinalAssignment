import { Link } from "react-router-dom"
import styles from "../Header/Header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
                 <h3>ETLP</h3>
                 <span>
                 <Link to="/dashboard">Home</Link>|<Link to="/manage">Manage</Link>
                 </span>
        </div>
    )
}

export default Header
