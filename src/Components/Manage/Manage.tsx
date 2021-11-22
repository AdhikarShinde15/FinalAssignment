import { Link, Outlet } from "react-router-dom"
import Header from "../../Header/Header"

const Manage = () => {
    return (
        <div>
            <Header />
            <nav>
                <Link to="trainer">Manage Trainer</Link>
                <Link to="owner">Manage Owner</Link>
            </nav>
            <h1>Manage</h1>
            <Outlet/>
        </div>
    )
}

export default Manage
