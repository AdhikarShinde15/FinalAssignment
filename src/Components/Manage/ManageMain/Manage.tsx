import { Link, Outlet } from "react-router-dom"
import Header from "../../Header/Header"
import styles from "../ManageMain/Manage.module.scss"
const Manage = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link to="trainer">Manage Trainer</Link>
                    <Link to="owner">Manage Owner</Link>
                </nav>
                <div>
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}

export default Manage
