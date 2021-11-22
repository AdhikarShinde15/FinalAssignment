import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
                <Link to="/dashboard">Home</Link>|<Link to="/manage">Manage</Link>
        </div>
    )
}

export default Header
