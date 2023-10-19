import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to={'/'}>Home</Link>
            <Link to={'/chat'}>Chat</Link>
            <Link to={'/api'}>API</Link>
            <Link to={'/counter'}>Counter</Link>
        </div>
    )
};

export default Nav;