import React, {useState} from 'react';
import {Train} from "../modals/Train";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchTrain} from "../../reducers/ActionCreators";
import {Trains} from "../modals/Trains";


export const ShowTrains = () => {
    const dispatch = useAppDispatch()
    const trains = useAppSelector((state) => state.trainReducer.trains);

    const [from, setFrom] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [show, setShow]=useState<boolean>(false)


    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTo(event.target.value);
    };

    const handleShowTrainsClick = async () => {
        await fetchTrain(from, to, dispatch)
        setShow(true)
    };

    const handleCreateTripClick = () => {
        setShowModal(true);
    };

    const handleCloseModalClick = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2>Where are you traveling from and to?</h2>
            <label htmlFor="from-input">From: </label>
            <input type="text" id="from-input" value={from} onChange={handleFromChange}/>
            <br/>
            <label htmlFor="to-input">To: </label>
            <input type="text" id="to-input" value={to} onChange={handleToChange}/>
            <br/>
            <button onClick={handleShowTrainsClick}>Show Trains</button>
            <button onClick={handleCreateTripClick}>Create Trip</button>

            {showModal && (
                <Train
                    isOpen={showModal}
                    onClose={handleCloseModalClick}
                />
            )}
            {show && (
                <Trains isOpen={show} onClose={handleShowTrainsClick} trains={trains}/>
            )}
        </div>
    );
};

