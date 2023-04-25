import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {createTrain} from "../../api/trainApi";
import {Button, Form, Row} from "react-bootstrap";


interface Props {
    show: boolean;
    onHide: () => void;
}

export const Train: React.FC<Props> = ({ show, onHide }) => {
    const [fromPlace, setFromPlace] = useState<string>('');
    const [toPlace, setToPlace] = useState<string>('');
    const [departureDay, setDepartureDay] = useState<string>('');
    const [departureMonth, setDepartureMonth] = useState<string>('');
    const [departureYear, setDepartureYear] = useState<string>('');
    const [availablePlaces, setAvailablePlaces] = useState<string>('');

    const finalDate = departureYear + departureMonth + departureDay;

    const addTrain = () => {
        const formData = new FormData();
        formData.append('fromPlace', fromPlace);
        formData.append('toPlace', toPlace);
        formData.append('departureTime', finalDate);
        formData.append('availablePlaces', availablePlaces);
        createTrain(formData).then(data => onHide());
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить рейс (Дата в формате 01 01 2023)
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={fromPlace}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFromPlace(e.target.value)}
                        placeholder={"Откуда отправляется поезд"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={toPlace}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToPlace(e.target.value)}
                        placeholder={"Куда отправляется поезд"}
                    />
                </Form>
                <Row>
                    <Form>
                        <Form.Control
                            value={departureDay}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDepartureDay(e.target.value)}
                            placeholder={"День отправления"}
                        />
                    </Form>
                    <Form>
                        <Form.Control
                            value={departureMonth}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDepartureMonth(e.target.value)}
                            placeholder={"Месяц отправления"}
                        />
                    </Form>
                    <Form>
                        <Form.Control
                            value={departureYear}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDepartureYear(e.target.value)}
                            placeholder={"Год отправления"}
                        />
                    </Form>
                </Row>
                <Form>
                    <Form.Control
                        value={availablePlaces}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAvailablePlaces(e.target.value)}
                        placeholder={"Количество свободных мест"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={addTrain} >Добавить</Button>
                <Button variant="outline-danger" onClick={onHide} >Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

