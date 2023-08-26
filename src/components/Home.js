import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { USERS } from "../Users";

function Home() {
    const navigate = useNavigate();

    const handleUserClick = (userName) => {
        // Pass user's name
        navigate(`/catalog/user/${userName}`.toLowerCase()); // Use user's name in the URL
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
                        onClick={() => handleUserClick(user.name)} // Pass user's name
                    >
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
