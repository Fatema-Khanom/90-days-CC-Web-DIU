import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {
    const users= useLoaderData();
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>Users information</p>
            <div className="users">
                {
                    users.map(user=> <User user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;