import React, { useState } from 'react';
import {Train} from "../modals/Train";


interface ShowTrainsProps {}

export const ShowTrains: React.FC<ShowTrainsProps> = () => {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTo(event.target.value);
    };

    const handleShowTrainsClick = () => {
        console.log(`Showing trains from ${from} to ${to}`);
        // Implement logic to show trains here
    };

    const handleCreateTripClick = () => {
        console.log(`Creating trip from ${from} to ${to}`);
        setShowModal(true);
    };

    const handleCloseModalClick = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2>Where are you traveling from and to?</h2>
            <label htmlFor="from-input">From: </label>
            <input type="text" id="from-input" value={from} onChange={handleFromChange} />
            <br />
            <label htmlFor="to-input">To: </label>
            <input type="text" id="to-input" value={to} onChange={handleToChange} />
            <br />
            <button onClick={handleShowTrainsClick}>Show Trains</button>
            <button onClick={handleCreateTripClick}>Create Trip</button>

            {showModal && (
                <Train
                    isOpen={showModal}
                    onClose={handleCloseModalClick}
                />
            )}
        </div>
    );
};

