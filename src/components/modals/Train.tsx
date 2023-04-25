import React, { useState } from 'react';
// @ts-ignore
import styles from './Train.module.css';

interface TrainModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Train: React.FC<TrainModalProps> = ({ isOpen, onClose }) => {
    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTo(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const handleCreateTripClick = () => {
        console.log(`Creating trip from ${from} to ${to} on ${date}`);
        // Implement logic to create a new trip here
        onClose();
    };

    return isOpen ? (
        <div className={styles.modal}>
            <h2>Create a new trip</h2>
            <label htmlFor="from-input">From: </label>
            <input type="text" id="from-input" value={from} onChange={handleFromChange} />
            <br />
            <label htmlFor="to-input">To: </label>
            <input type="text" id="to-input" value={to} onChange={handleToChange} />
            <br />
            <label htmlFor="date-input">Date: </label>
            <input type="date" id="date-input" value={date} onChange={handleDateChange} />
            <br />
            <button onClick={handleCreateTripClick}>Create Trip</button>
            <button onClick={onClose}>Close</button>
        </div>
    ) : null;
};
