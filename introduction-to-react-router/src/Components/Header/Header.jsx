import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            
            <nav>
                <span>My website</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;