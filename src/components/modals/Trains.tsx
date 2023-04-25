import { TrainTypes } from "../../types/trainTypes";
// @ts-ignore
import styles from "./Train.module.css";
import React from "react";

interface TrainsModalProps {
    isOpen: boolean;
    onClose: () => void;
    trains: TrainTypes[];
}

export const Trains: React.FC<TrainsModalProps> = ({ isOpen, onClose, trains }) => {
    return (
        <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ""}`}>
            <div className={styles.modalHeader}>
                <h1>List of available trains</h1>
                <button className={styles.closeButton} onClick={onClose}>
                    Закрыть
                </button>
            </div>
            <div className={styles.modalContent}>
                {trains.map((t) => (
                    <div key={t.id}>
                        <div><strong>from:</strong> {t.fromPlace}</div>
                        <div>to: {t.toPlace}</div>
                        <div>Date: {t.departureTime}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
