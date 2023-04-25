import React, {useState} from 'react';
// @ts-ignore
import styles from './Train.module.css';
import {createTrainTrip} from "../../api/trainApi";


interface TrainModalProps {
    isOpen: boolean;
    onClose: () => void;

}

export const Train: React.FC<TrainModalProps> = ({isOpen, onClose}) => {
    const [fromPlace, setFromPlace] = useState<string>('');
    const [toPlace, setToPlace] = useState<string>('');
    const [departureTime, setDepartureTime] = useState<string>('');

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromPlace(event.target.value);
    };

    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToPlace(event.target.value);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDepartureTime(event.target.value);
    };

    const handleCreateTripClick = async () => {
        await createTrainTrip({toPlace, fromPlace, departureTime})
        onClose();
    };

    return isOpen ? (
        <div className={styles.modal}>
            <h2>Create a new trip</h2>
            <label htmlFor="from-input">From: </label>
            <input type="text" id="from-input" value={fromPlace} onChange={handleFromChange}/>
            <br/>
            <label htmlFor="to-input">To: </label>
            <input type="text" id="to-input" value={toPlace} onChange={handleToChange}/>
            <br/>
            <label htmlFor="date-input">Date: </label>
            <input type="date" id="date-input" value={departureTime} onChange={handleDateChange}/>
            <br/>
            <button onClick={handleCreateTripClick}>Create Trip</button>
            <button onClick={onClose}>Close</button>
        </div>
    ) : null;
};
