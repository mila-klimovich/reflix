import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { USERS } from "../Users";

function Home() {
    const navigate = useNavigate();

    const handleUserClick = (user) => {
        // Save user information to local storage
        localStorage.setItem("selectedUser", JSON.stringify(user));

        navigate(`/catalog/user/${user.name.toLowerCase()}`);
    };

    return (
        <div className="home">
            <div className="who-is-watching">Who's watching?</div>
            <div className="square-container">
                {USERS.map((user) => (
                    <div
                        key={user.id}
                        className="square"
                        style={{ backgroundColor: user.color }}
                        onClick={() => handleUserClick(user)}
                    >
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;