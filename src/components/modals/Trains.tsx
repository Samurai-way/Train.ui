import {TrainTypes} from "../../types/trainTypes";
// @ts-ignore
import styles from "./Train.module.css";
import React from "react";


interface TrainsModalProps {
    isOpen: boolean;
    onClose: () => void;
    trains: TrainTypes[]
}

export const Trains: React.FC<TrainsModalProps> = ({isOpen, onClose, trains}) => {

    return isOpen ? (
        <div className={styles.modal}>
            {trains.map((t) =>
                <div key={t.id}>
                    {t.fromPlace}
                    {t.toPlace}
                    {t.departureTime}
                </div>
            )}
        </div>
    ) : null;

};
