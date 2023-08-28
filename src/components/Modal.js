
import React, { useEffect, useState } from "react";
import "./Modal.css"

function Modal({ modalClosed, lastRented }) {
    const [gifUrl, setGifUrl] = useState('');

    useEffect(() => {
        async function fetchGif() {
            try {
                let response = await fetch(
                    `http://api.giphy.com/v1/gifs/search?api_key=AyNkVPxUIN6Mswv4HU831efWTosug0g1&limit=1&q=${lastRented}`
                );
                let data = await response.json();

                if (data.data && data.data.length > 0) {
                    setGifUrl(data.data[0].images.original.url);
                }
            } catch (error) {
                console.error("Error fetching GIF:", error);
            }
        }

        fetchGif();
    }, [lastRented]);

    return (
        <div className="modalLayer">
            <div className="modalContainer">
                <div className="modalCloseButton">
                    <button onClick={() => modalClosed(false)}>X</button>
                </div>
                <div className="message">
                    <h3>Rented {lastRented} Successfully!</h3>
                </div>
                {gifUrl && <img src={gifUrl} alt="GIF" />}
            </div>
        </div>
    );
}

export default Modal;






